import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saint-martin',
  templateUrl: './saint-martin.component.html',
  styleUrls: ['./saint-martin.component.scss']
})
export class SaintMartinComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/bangladesh/SaintMartinIsland${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
