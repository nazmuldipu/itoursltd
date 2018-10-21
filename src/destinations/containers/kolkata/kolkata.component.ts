import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kolkata',
  templateUrl: './kolkata.component.html',
  styleUrls: ['./kolkata.component.scss']
})
export class KolkataComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/india/Kolkata${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
