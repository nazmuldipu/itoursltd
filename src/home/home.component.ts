import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <navbar class="nav"></navbar>
    <router-outlet></router-outlet>
  `,
  styles: ['.nav { display: block; }']
})
export class HomeComponent {
  constructor() {}
}
