import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.scss']
})
export class HotDealsComponent implements OnInit {
  innerWidth;
  divWidth: number;
  constructor() {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.divWidth = Math.round(
      this.widgetsContent.nativeElement.offsetWidth / 4
    );
  }

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent: ElementRef<any>;

  scrollRight() {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + this.divWidth,
      behavior: 'smooth'
    });
  }

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - this.divWidth,
      behavior: 'smooth'
    });
  }
}
