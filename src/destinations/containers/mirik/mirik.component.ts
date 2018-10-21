import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mirik',
  templateUrl: './mirik.component.html',
  styleUrls: ['./mirik.component.scss']
})
export class MirikComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(i => `assets/images/destinations/india/Mirik${i}.jpg`);
  constructor() {}

  ngOnInit() {}
}
