import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login = true;
  errorMessage;

  constructor(private router: Router) {}

  loginClicked() {
    this.login = true;
  }

  registerClicked() {
    this.login = false;
  }
}
