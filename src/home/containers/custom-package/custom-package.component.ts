import { Component, OnInit } from '@angular/core';
import { CustomPackageService } from 'src/shared/services/custom-package.service';

@Component({
  selector: 'app-custom-package',
  templateUrl: './custom-package.component.html',
  styleUrls: ['./custom-package.component.scss']
})
export class CustomPackageComponent implements OnInit {
  constructor(private customPackageService: CustomPackageService) {}

  ngOnInit() {}
}
