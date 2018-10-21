import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-malaysia',
  templateUrl: './malaysia.component.html',
  styleUrls: ['./malaysia.component.scss']
})
export class MalaysiaComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(i => `assets/images/destinations/Malaysia${i}.jpg`);
  constructor() {}

  ngOnInit() {}
}
