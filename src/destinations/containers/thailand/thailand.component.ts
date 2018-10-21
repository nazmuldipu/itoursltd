import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thailand',
  templateUrl: './thailand.component.html',
  styleUrls: ['./thailand.component.scss']
})
export class ThailandComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(i => `assets/images/destinations/Thailand${i}.jpg`);
  constructor() {}

  ngOnInit() {}
}
