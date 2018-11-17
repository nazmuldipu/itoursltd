import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../../shared/services/packages.service';
import { HotdealsService } from '../../../shared/services/hotdeals.service';
import { GallerysService } from '../../../shared/services/gallerys.service';
import { CustomPackageService } from '../../../shared/services/custom-package.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  packageNumber = 0;
  hotdealNumber = 0;
  galleryNumber = 0;
  customPackageNumber = 0;
  constructor(
    private packagesService: PackagesService,
    private hotdealsService: HotdealsService,
    private gallerysService: GallerysService,
    private customPackagesService: CustomPackageService
  ) {}

  ngOnInit() {
    this.getPackageNumber();
    this.getHotdealsNumber();
    this.getGelleryNumber();
    this.getCustomPackagesNumber();
  }

  async getPackageNumber() {
    await this.packagesService.packages$.subscribe(data => {
      if (data.length) {
        this.packageNumber = data.length;
      }
    });
  }

  async getHotdealsNumber() {
    await this.hotdealsService.hotdeals$.subscribe(data => {
      if (data.length) {
        this.hotdealNumber = data.length;
      }
    });
  }

  async getGelleryNumber() {
    await this.gallerysService.gallerys$.subscribe(data => {
      if (data.length) {
        this.galleryNumber = data.length;
      }
    });
  }

  async getCustomPackagesNumber() {
    await this.customPackagesService.customPackages$.subscribe(data => {
      if (data.length) {
        this.customPackageNumber = data.length;
      }
    });
  }
}
