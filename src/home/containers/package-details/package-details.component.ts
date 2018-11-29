import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/shared/services/packages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from '../../../shared/models/package.model';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {
  id;
  package: Package;
  packageType = ['Regular Package', 'Deluxe Package', 'Crown Package'];

  constructor(
    private packageService: PackagesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.id = activeRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    if (this.id) {
      this.loadPackge(this.id);
    }
  }

  async loadPackge(id: string) {
    await this.packageService.packages$.subscribe((data: Package[]) => {
      this.package = data.find(pac => pac.id == id);
    });
  }

  onCityChange(city: string = null) {
    console.log('id', city);
    if (city) {
      this.router.navigate(['package-list', city]);
    } else {
      this.router.navigate(['package-list']);
    }
  }
}
