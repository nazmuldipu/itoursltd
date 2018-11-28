import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from 'src/shared/models/package.model';
import { PackagesService } from 'src/shared/services/packages.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {
  packages: Package[];

  constructor(
    private packageService: PackagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPackge();
  }

  async loadPackge(city: string = null) {
    await this.packageService.packages$.subscribe((data: Package[]) => {
      this.packages = [];
      if (city) {
        this.packages = data.filter(pak => pak.area.includes(city));
      } else {
        this.packages = data;
      }
    });
  }

  onCityChange(city: string) {
    this.loadPackge(city);
  }

  onPackageClick(id: string) {
    console.log('bad', id);
    this.router.navigate(['package-details', id]);
  }
}
