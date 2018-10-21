import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-china',
  templateUrl: './china.component.html',
  styleUrls: ['./china.component.scss']
})
export class ChinaComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(i => `assets/images/destinations/China${i}.jpg`);
  constructor() {}

  ngOnInit() {}
}
