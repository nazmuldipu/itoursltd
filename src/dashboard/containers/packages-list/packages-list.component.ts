import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from 'src/shared/models/package.model';
import { PackagesService } from 'src/shared/services/packages.service';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.scss']
})
export class PackagesListComponent implements OnInit {
  showLoading = false;
  packages: Package[];
  constructor(
    private packageService: PackagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPackages();
  }
  async getPackages() {
    this.showLoading = true;
    await this.packageService.getAll().subscribe(
      data => {
        this.packages = data;
        this.showLoading = false;
      },
      error => {
        console.log(error);
        this.showLoading = false;
      }
    );
  }

  onEdit(id: string) {
    console.log('on edit ', id);
    //
    this.router.navigate(['/dashboard/packages-add', id]);
  }
  onDelete(id: string) {
    console.log('on Delete ', id);
  }
}