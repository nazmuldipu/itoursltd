import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutUsSideNavbarData } from 'src/shared/json/about-us-sidenav';

@Component({
  selector: 'about-sidenav',
  templateUrl: './about-sidenav.component.html',
  styleUrls: ['./about-sidenav.component.scss']
})
export class AboutSidenavComponent {
  menuList: any;
  selected: any = 'company-overview';
  navUrl: any;
  navCollaps: false;

  constructor(private router: Router) {
    this.menuList = AboutUsSideNavbarData;
  }

  select(smenu) {
    this.selected = smenu == this.selected ? null : smenu;
  }

  isActive(smenu) {
    return this.selected === smenu;
  }

  minimize(smenu) {
    this.selected = smenu == this.selected ? null : smenu;
  }

  navigateTo(url: string) {
    this.navUrl = url;
    this.router.navigate([url]);
  }
}
