import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrls: ['./dash-navbar.component.scss']
})
export class DashNavbarComponent implements OnInit {
  @Output()
  toggle = new EventEmitter();

  username = 'user';
  constructor(public auth: AuthService) {}

  ngOnInit() {
    let username = localStorage.getItem('username');
    if (username.length > 1) {
      this.username = username;
    }
  }

  toggleMenu() {
    this.toggle.emit();
  }

  logout() {
    this.auth.logout();
  }
}
