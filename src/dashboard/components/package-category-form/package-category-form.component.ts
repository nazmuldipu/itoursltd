import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  DoCheck,
  KeyValueDiffers
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PackageType } from 'src/shared/models/package.model';

@Component({
  selector: 'package-category-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './package-category-form.component.html',
  styleUrls: ['./package-category-form.component.scss']
})
export class PackageCategoryFormComponent implements OnChanges {
  @Input()
  parent: FormGroup;

  @Input()
  group: string;

  @Input()
  mouseoverShifting: boolean;

  @Input()
  package: PackageType;

  differ: any;

  constructor(private fb: FormBuilder, private differs: KeyValueDiffers) {
    this.differ = differs.find({}).create();
  }

  ngOnChanges() {
    var changes = this.differ.diff(this.package);
    if (changes) {
      console.log('changes detected');
      // changes.forEachChangedItem(r => console.log('changed ', r.currentValue));
      // changes.forEachAddedItem(r => console.log('added ' + r.currentValue));
      // changes.forEachRemovedItem(r => console.log('removed ' + r.currentValue));

      if (this.package != null && this.package.headline.length > 0) {
        // Patch inclusions array
        let ctrl = <FormArray>this.parent.get(this.group).get('inclusions');
        ctrl.removeAt(0);
        this.package.inclusions.forEach(ar => {
          if (ar.length > 0) {
            ctrl.push(new FormControl(ar));
          }
        });

        // Patch inclusions array
        ctrl = <FormArray>this.parent.get(this.group).get('exclusions');
        ctrl.removeAt(0);
        this.package.exclusions.forEach(ar => {
          if (ar.length > 0) {
            ctrl.push(new FormControl(ar));
          }
        });

        // Patch description array
        ctrl = <FormArray>this.parent.get(this.group).get('description');
        ctrl.removeAt(0);
        this.package.description.forEach((ar, i) => {
          const control = <FormArray>(
            this.parent.get(this.group).get('description')
          );
          if (ar.head.length > 2) {
            control.push(this.createDescriptionArray(ar.head, ar.texts));
          }
        });
      }
    }
  }

  getDescriptoin(form) {
    return this.parent.get(this.group).get('description');
  }

  createDescriptionArray(head: string = '', texts: string[] = ['']) {
    return this.fb.group({
      head: head,
      texts: this.fb.array(texts)
    });
  }

  addDescription() {
    const control = <FormArray>this.parent.get(this.group).get('description');
    control.push(this.createDescriptionArray());
  }

  addTexts(i) {
    const control = <FormArray>this.parent
      .get(this.group)
      .get('description')
      .get([i])
      .get('texts');
    control.push(new FormControl(''));
  }

  get taglines(): FormArray {
    return this.parent.get(this.group).get('taglines') as FormArray;
  }
  addTaglines() {
    let control = this.parent.get(this.group).get('taglines') as FormArray;
    control.push(new FormControl(''));
  }

  get inclusions(): FormArray {
    return this.parent.get(this.group).get('inclusions') as FormArray;
  }
  addInclusions() {
    let control = this.parent.get(this.group).get('inclusions') as FormArray;
    control.push(new FormControl(''));
  }

  get exclusions(): FormArray {
    return this.parent.get(this.group).get('exclusions') as FormArray;
  }
  addExclusions() {
    let control = this.parent.get(this.group).get('exclusions') as FormArray;
    control.push(new FormControl(''));
  }

  required(name: string) {
    return (
      this.parent.get(`${this.group}.${name}`).hasError('required') &&
      (this.parent.get(`${this.group}.${name}`).touched ||
        this.mouseoverShifting)
    );
  }
}
