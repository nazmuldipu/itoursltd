import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PackagesService } from '../../services/packages.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
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

  toggleCollapse() {
    this.show = !this.show;
  }

  logout() {
    console.log('log out');
    this.authService.logout();
    this.toggleCollapse();
  }
}
