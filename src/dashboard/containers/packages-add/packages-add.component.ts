import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../../shared/services/packages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from '../../../shared/models/package.model';

@Component({
  selector: 'app-packages-add',
  templateUrl: './packages-add.component.html',
  styleUrls: ['./packages-add.component.scss']
})
export class PackagesAddComponent implements OnInit {
  showBusy = false;
  package: Package;
  id;
  constructor(
    private packageService: PackagesService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = activeRoute.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    if (this.id) {
      this.showBusy = true;
      await this.packageService.packages$.subscribe(
        data => {
          this.package = data.find(pk => pk.id == this.id) as Package;
          this.showBusy = false;
        },
        error => console.log(error)
      );
    }
  }

  onCreate(event) {
    console.log(event);
    this.showBusy = true;
    this.packageService
      .create(event)
      .then(ref => {
        this.showBusy = true;
        console.log('Package Created Successfully');
        this.router.navigate(['/dashboard/packages-list']);
      })
      .catch(error => {
        this.showBusy = true;
        console.log('Package could not create');
      });
  }

  onUpdate(event) {
    console.log(event);
    this.showBusy = true;
    this.packageService
      .update(this.id, event)
      .then(ref => {
        this.showBusy = false;
        console.log('Package updated Successfully');
        this.router.navigate(['/dashboard/packages-list']);
      })
      .catch(error => {
        this.showBusy = false;
        console.log('Package could not update');
      });
  }
}
