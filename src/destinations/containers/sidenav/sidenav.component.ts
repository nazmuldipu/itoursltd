import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavbarData } from 'src/shared/json/side-navbar-destination';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  // navCollaps: boolean;
  menuList: any;
  selected: any = 'Dashboard';
  navUrl: any;
  // roles: string[] = [];

  // webTitle: String;
  // menuList: any;
  // selected: any;

  constructor(private router: Router) {
    // this.webTitle = 'মনের বাড়ি';
    this.menuList = SideNavbarData;
  }

  async ngOnInit() {
    // this.profileService.getProfile(this.user.username).subscribe(data => {
    //   if (data) {
    //     this.profile = data;
    //     this.profile.profilePicture =
    //       this.profileService.imageUrl +
    //       this.user.username +
    //       `?access_token=` +
    //       this.auth.getAccessToken();
    //   }
    // });
  }

  // navbarTrigger() {
  //   this.sideNav.collapseNavber();
  // }
  navCollaps: false;
  // get navCollaps() {
  //   return this.sideNav.getSideNavBarCollapse();
  // }

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
