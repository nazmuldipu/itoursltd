import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kashmir',
  templateUrl: './kashmir.component.html',
  styleUrls: ['./kashmir.component.scss']
})
export class KashmirComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/india/Kashmir${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
