import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import { AuthService } from '../../services/auth.service';

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
  show = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  toggleCollapse() {
    this.show = !this.show;
  }

  logout() {
    console.log('log out');
    this.authService.logout();
    this.toggleCollapse();
  }
}
