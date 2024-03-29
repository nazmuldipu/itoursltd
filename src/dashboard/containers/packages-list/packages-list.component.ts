import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from 'src/shared/models/package.model';
import { PackagesService } from 'src/shared/services/packages.service';
import { AngularFireStorage } from '@angular/fire/storage';

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
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.getAllPackages();
  }

  async getAllPackages() {
    this.showLoading = true;
    await this.packageService.packages$.subscribe(
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
    this.router.navigate(['/dashboard/packages-add', id]);
  }
  onDelete(id: string) {
    if (confirm('Are you sure to delete')) {
      const hd = this.packages.find(pkk => pkk.id === id).imageUrl;
      //remove image first
      this.storage.storage.refFromURL(hd).delete();

      this.packageService.delete(id).then(ref => {
        console.log('Package Deleted successfully');
      });
    }
  }
}
