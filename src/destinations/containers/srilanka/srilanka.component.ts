import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-srilanka',
  templateUrl: './srilanka.component.html',
  styleUrls: ['./srilanka.component.scss']
})
export class SrilankaComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(i => `assets/images/destinations/Srilanka${i}.jpg`);
  constructor() {}

  ngOnInit() {}
}
