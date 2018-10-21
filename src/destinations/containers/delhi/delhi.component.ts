import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delhi',
  templateUrl: './delhi.component.html',
  styleUrls: ['./delhi.component.scss']
})
export class DelhiComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(i => `assets/images/destinations/india/Delhi${i}.jpg`);
  constructor() {}

  ngOnInit() {}
}
