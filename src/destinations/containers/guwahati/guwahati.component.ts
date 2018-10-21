import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guwahati',
  templateUrl: './guwahati.component.html',
  styleUrls: ['./guwahati.component.scss']
})
export class GuwahatiComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/india/Guwahati${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
