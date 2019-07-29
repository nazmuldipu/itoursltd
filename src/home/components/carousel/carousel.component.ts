import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [1, 2, 3, 4, 5].map(i => `assets/images/font_pics/font_pics-${i}.jpg`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  // navigate(url) {
  //   this.router.navigateByUrl(url);
  // }
}
