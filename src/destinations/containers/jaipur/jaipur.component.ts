import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jaipur',
  templateUrl: './jaipur.component.html',
  styleUrls: ['./jaipur.component.scss']
})
export class JaipurComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/india/Jaipur${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
