import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PackagesService } from 'src/shared/services/packages.service';

@Component({
  selector: 'package-list-side-nav',
  templateUrl: './package-list-side-nav.component.html',
  styleUrls: ['./package-list-side-nav.component.scss']
})
export class PackageListSideNavComponent implements OnInit {
  menuList: any;
  navUrl: any;
  selected: any = 'Dashboard';

  @Output() city = new EventEmitter();

  constructor(
    // private router: Router,
    private packageService: PackagesService
  ) {}

  ngOnInit() {
    this.packageService.packageSideNav$.subscribe(data => {
      this.menuList = data;
    });
  }

  select(smenu) {
    this.selected = smenu;
  }

  isActive(smenu) {
    return this.selected === smenu;
  }

  minimize(smenu) {
    this.selected = smenu == this.selected ? null : smenu;
  }

  navigateTo(city: string = null) {
    this.navUrl = city;
    this.city.emit(city);
  }

  hasAuthority(authority: string): boolean {
    return true;
  }
}
