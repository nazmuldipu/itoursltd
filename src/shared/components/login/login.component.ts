import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login = true;
  errorMessage = '';
  showBusy = false;

  constructor(private auth: AuthService, private router: Router) {}

  loginClicked() {
    this.login = true;
  }

  registerClicked() {
    this.login = false;
  }

  async onLogin(event) {
    this.showBusy = true;
    this.errorMessage = '';
    await this.auth
      .loginWithEmail(event.email, event.password)
      .then(async ref => {
        console.log('Login success', ref.user.uid);
        await this.auth.getRegisteredUsers(ref.user.uid).subscribe(data => {
          console.log(data);
          localStorage.setItem('username', data.name);
          let role = data.roles[0];
          localStorage.setItem('role', role);
          if (role == 'ADMIN' || role == 'EMPLOYEE') {
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage =
              'You do not have permission to access the dashboard';
          }
          // this.showBusy = false;
        });
      })
      .catch(error => {
        this.showBusy = false;
        this.errorMessage = error.message;
      });
  }

  onRegister(event) {
    this.showBusy = true;
    this.auth
      .register(event.email, event.password)
      .then(ref => {
        let returnUrl = '/login';
        this.auth
          .saveUserInfoFromForm(
            ref.user.uid,
            event.name,
            event.email,
            event.password
          )
          .then(ref => {
            this.showBusy = false;
            this.router.navigateByUrl(returnUrl);
          })
          .catch(error => {
            console.log('USER SAVIG ERROR', error);
            this.errorMessage = error.message;
            this.showBusy = false;
          });
      })
      .catch(error => {
        console.log('REGISTRATION ERROR', error);
        this.errorMessage = error.message;
        this.showBusy = false;
      });
  }
}
