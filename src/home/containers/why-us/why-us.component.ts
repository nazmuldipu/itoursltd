import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent implements OnInit {
  url;
  trustedUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url = 'javascript:console.log("Inside DOM")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.url);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
