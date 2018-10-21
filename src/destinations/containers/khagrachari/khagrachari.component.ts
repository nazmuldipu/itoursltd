import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khagrachari',
  templateUrl: './khagrachari.component.html',
  styleUrls: ['./khagrachari.component.scss']
})
export class KhagrachariComponent implements OnInit {
  showNavigationArrows = false;
  images = [1, 2, 3].map(
    i => `assets/images/destinations/bangladesh/Khagrachari${i}.jpg`
  );
  constructor() {}

  ngOnInit() {}
}
