import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indonesia',
  templateUrl: './indonesia.component.html',
  styleUrls: ['./indonesia.component.scss']
})
export class IndonesiaComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(i => `assets/images/destinations/Indonesia${i}.jpg`);
  constructor() {}

  ngOnInit() {}
}
