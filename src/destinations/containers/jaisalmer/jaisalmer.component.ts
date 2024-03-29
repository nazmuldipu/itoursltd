import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jaisalmer',
  templateUrl: './jaisalmer.component.html',
  styleUrls: ['./jaisalmer.component.scss']
})
export class JaisalmerComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/india/Jaisalmer${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
