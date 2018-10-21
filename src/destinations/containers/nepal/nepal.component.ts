import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nepal',
  templateUrl: './nepal.component.html',
  styleUrls: ['./nepal.component.scss']
})
export class NepalComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(i => `assets/images/destinations/Nepal${i}.jpg`);
  constructor() {}

  ngOnInit() {}
}
