import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bhutan',
  templateUrl: './bhutan.component.html',
  styleUrls: ['./bhutan.component.scss']
})
export class BhutanComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(i => `assets/images/destinations/Bhutan${i}.jpg`);
  constructor() {}

  ngOnInit() {}
}
