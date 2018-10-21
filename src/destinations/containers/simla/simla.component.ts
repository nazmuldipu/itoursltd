import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simla',
  templateUrl: './simla.component.html',
  styleUrls: ['./simla.component.scss']
})
export class SimlaComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/india/Simla${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
