import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/shared/services/packages.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {
  packageSideNav;

  constructor(private packageService: PackagesService) { }

  ngOnInit() {
    this.packageService.packageSideNav$.subscribe(data => {
      this.packageSideNav = data;
    });
  }

}
