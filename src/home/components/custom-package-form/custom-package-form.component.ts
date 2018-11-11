import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { CustomPackage } from 'src/shared/models/custom-package.model';

@Component({
  selector: 'custom-package-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './custom-package-form.component.html',
  styleUrls: ['./custom-package-form.component.scss']
})
export class CustomPackageFormComponent implements OnChanges {
  @Output()
  create = new EventEmitter<CustomPackage>();
  @Output()
  update = new EventEmitter<CustomPackage>();

  constructor() {}

  ngOnChanges() {}
}
