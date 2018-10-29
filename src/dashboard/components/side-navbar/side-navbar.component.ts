import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavbarDashboard } from 'src/shared/json/side-nav-dashboard';

@Component({
  selector: 'side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  menuList: any;
  navUrl: any;
  selected: any = 'Dashboard';

  constructor(private router: Router) {
    this.menuList = SideNavbarDashboard;
  }

  ngOnInit() {}

  select(smenu) {
    this.selected = smenu;
  }

  isActive(smenu) {
    // console.log('isActive', smenu);
    return this.selected === smenu;
  }

  minimize(smenu) {
    this.selected = smenu == this.selected ? null : smenu;
  }

  navigateTo(url: string) {
    this.navUrl = url;
    this.router.navigate([this.navUrl]);
  }

  hasAuthority(authority: string): boolean {
    return true;
  }
}
