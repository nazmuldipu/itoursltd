import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cherrapunjee',
  templateUrl: './cherrapunjee.component.html',
  styleUrls: ['./cherrapunjee.component.scss']
})
export class CherrapunjeeComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/india/Cherrapunjee${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
