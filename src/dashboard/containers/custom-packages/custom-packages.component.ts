import { Component, OnInit } from '@angular/core';
import { CustomPackage } from 'src/shared/models/custom-package.model';
import { CustomPackageService } from 'src/shared/services/custom-package.service';

@Component({
  selector: 'app-custom-packages',
  templateUrl: './custom-packages.component.html',
  styleUrls: ['./custom-packages.component.scss']
})
export class CustomPackagesComponent implements OnInit {
  customPackage: CustomPackage;
  customPackages: CustomPackage[];
  showLoading = true;

  constructor(private customPackageService: CustomPackageService) {}

  ngOnInit() {
    this.getAllCustomPackages();
  }

  async getAllCustomPackages() {
    this.showLoading = true;
    await this.customPackageService.customPackages$.subscribe(data => {
      this.customPackages = data;
      this.showLoading = false;
    });
  }

  showDeatails(id: string) {
    this.customPackage = this.customPackages.find(cp => cp.id == id);
  }
}
