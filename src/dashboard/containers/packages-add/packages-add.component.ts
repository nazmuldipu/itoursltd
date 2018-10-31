import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../../shared/services/packages.service';

@Component({
  selector: 'app-packages-add',
  templateUrl: './packages-add.component.html',
  styleUrls: ['./packages-add.component.scss']
})
export class PackagesAddComponent implements OnInit {
  showBusy = false;

  constructor(private packageService: PackagesService) {}

  ngOnInit() {}

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
