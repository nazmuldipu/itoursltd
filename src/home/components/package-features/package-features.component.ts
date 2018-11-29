import { Component, OnInit, Input } from '@angular/core';
import { PackageType } from 'src/shared/models/package.model';

@Component({
  selector: 'package-features',
  templateUrl: './package-features.component.html',
  styleUrls: ['./package-features.component.scss']
})
export class PackageFeaturesComponent implements OnInit {
  @Input() packageName: string;
  @Input() packageType: PackageType;

  constructor() {}

  ngOnInit() {
    console.log(this.packageName);
  }
}
