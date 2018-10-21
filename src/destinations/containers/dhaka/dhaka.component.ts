import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dhaka',
  templateUrl: './dhaka.component.html',
  styleUrls: ['./dhaka.component.scss']
})
export class DhakaComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/bangladesh/dhaka${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
