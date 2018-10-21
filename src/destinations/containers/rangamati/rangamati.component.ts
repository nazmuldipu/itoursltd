import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rangamati',
  templateUrl: './rangamati.component.html',
  styleUrls: ['./rangamati.component.scss']
})
export class RangamatiComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/bangladesh/Rangamati${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
