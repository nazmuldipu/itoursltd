import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kuakata',
  templateUrl: './kuakata.component.html',
  styleUrls: ['./kuakata.component.scss']
})
export class KuakataComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/bangladesh/kuakata${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
