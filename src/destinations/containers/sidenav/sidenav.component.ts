import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavbarData } from 'src/shared/json/side-navbar-destination';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  menuList: any;
  selected: any = 'Dashboard';
  navUrl: any;
  navCollaps: false;

  constructor(private router: Router) {
    this.menuList = SideNavbarData;
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
