import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shillong',
  templateUrl: './shillong.component.html',
  styleUrls: ['./shillong.component.scss']
})
export class ShillongComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/india/Shillong${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
