import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
  <div class="menu" [ngClass]="menuState==='in'? 'menu-open' : 'menu-close'">
    <side-navbar class="menu-side"></side-navbar>
    <div class="content">
      <dash-navbar (toggle)="toggleMenu()"></dash-navbar>
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styles: [
    `
      .content {
        -webkit-transition: margin-left 0.8s;
        -moz-transition: margin-left 0.8s;
        transition: margin-left 0.8s;
      }
      .menu-side {
        width: 260px;
        left: -260px;
        transition: 0.8s;
      }
      .menu-open .menu-side {
        top: 15px;
        left: 0;
      }
      .menu-open .content {
        margin-left: 245px;
      }
    `
  ]
})
export class DashboardComponent {
  menuState: string = 'in';
  compState: string = 'narrow';
  constructor() {}

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  openNav() {
    this.menuState = 'in';
  }

  closeNav() {
    this.menuState = 'out';
  }
}
