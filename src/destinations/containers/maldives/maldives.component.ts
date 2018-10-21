import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maldives',
  templateUrl: './maldives.component.html',
  styleUrls: ['./maldives.component.scss']
})
export class MaldivesComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/Maldives${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
