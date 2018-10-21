import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darjeeling',
  templateUrl: './darjeeling.component.html',
  styleUrls: ['./darjeeling.component.scss']
})
export class DarjeelingComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/india/Darjeeling${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
