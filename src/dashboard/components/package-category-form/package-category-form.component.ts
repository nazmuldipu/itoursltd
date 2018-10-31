import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'package-category-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './package-category-form.component.html',
  styleUrls: ['./package-category-form.component.scss']
})
export class PackageCategoryFormComponent implements OnInit {
  @Input()
  parent: FormGroup;

  @Input()
  group: string;

  @Input()
  mouseoverShifting: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  getDescriptoin(form) {
    return this.parent.get(this.group).get('description');
  }

  createDescriptionArray() {
    return this.fb.group({
      head: '',
      texts: this.fb.array([''])
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

  // get description(): FormArray {
  //   return this.parent.get(this.group).get('description') as FormArray;
  // }
  // addDescription() {
  //   let control = this.parent.get(this.group).get('description') as FormArray;
  //   control.push(new FormControl(''));
  // }

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
