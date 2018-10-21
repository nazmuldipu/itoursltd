import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandarban',
  templateUrl: './bandarban.component.html',
  styleUrls: ['./bandarban.component.scss']
})
export class BandarbanComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/bangladesh/bandarban${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
