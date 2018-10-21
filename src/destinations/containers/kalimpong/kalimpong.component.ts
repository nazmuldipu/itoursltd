import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kalimpong',
  templateUrl: './kalimpong.component.html',
  styleUrls: ['./kalimpong.component.scss']
})
export class KalimpongComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/india/Kalimpong${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
