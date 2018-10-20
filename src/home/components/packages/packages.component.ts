import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  innerWidth;
  divWidth: number;

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent: ElementRef<any>;

  constructor() {}

  ngOnInit() {
    this.divWidth = Math.round(
      this.widgetsContent.nativeElement.offsetWidth / 3
    );
  }

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
