import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cox-bazar',
  templateUrl: './cox-bazar.component.html',
  styleUrls: ['./cox-bazar.component.scss']
})
export class CoxBazarComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/bangladesh/coxbazar${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
