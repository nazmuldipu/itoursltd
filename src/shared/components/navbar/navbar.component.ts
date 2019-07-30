import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PackagesService } from '../../services/packages.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // @ViewChild('stickyMenu')
  // menuElement: ElementRef;

  // @ViewChild('stickyMenu',{static: false}) menuElement: ElementRef;

  packages;
  elementPosition: any;
  show = false;
  constructor(
    public authService: AuthService,
    private packageService: PackagesService
  ) {}

  ngOnInit() {
    this.packageService.packageSideNav$.subscribe(data => {
      this.packages = data;
    });
  }

  ngAfterViewInit() {
    // this.elementPosition = this.menuElement.nativeElement.offsetTop;
    // this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  // @HostListener('window:scroll', ['$event'])
  // handleScroll() {
  //   const windowScroll = window.pageYOffset;
  //   if (windowScroll >= this.elementPosition) {
  //     this.sticky = true;
  //   } else {
  //     this.sticky = false;
  //   }
  // }

  toggleCollapse() {
    this.show = !this.show;
  }

  logout() {
    console.log('log out');
    this.authService.logout();
    this.toggleCollapse();
  }

}
