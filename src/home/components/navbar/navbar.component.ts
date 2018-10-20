import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('stickyMenu')
  menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
    console.log(this.elementPosition, 'pos');
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    console.log(windowScroll);
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
