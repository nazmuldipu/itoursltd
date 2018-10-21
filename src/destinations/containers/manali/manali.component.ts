import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manali',
  templateUrl: './manali.component.html',
  styleUrls: ['./manali.component.scss']
})
export class ManaliComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/india/Manali${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
