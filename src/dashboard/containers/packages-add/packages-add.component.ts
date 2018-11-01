import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../../shared/services/packages.service';
import { ActivatedRoute } from '@angular/router';
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
    private activeRoute: ActivatedRoute
  ) {
    this.id = activeRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  async ngOnInit() {
    if (this.id) {
      await this.packageService.get(this.id).subscribe(data => {
        console.log(data);
        this.package = data as Package;
      });
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
      })
      .catch(error => {
        this.showBusy = true;
        console.log('Package could not create');
      });
  }
}
