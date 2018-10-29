import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'package-category-form',
  templateUrl: './package-category-form.component.html',
  styleUrls: ['./package-category-form.component.scss']
})
export class PackageCategoryFormComponent implements OnInit {
  @Input()
  parent: FormGroup;

  @Input()
  group: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get taglines(): FormArray {
    return this.parent.get(this.group).get('taglines') as FormArray;
  }
  addTaglines() {
    let control = this.parent.get(this.group).get('taglines') as FormArray;
    control.push(new FormControl(''));
  }

  get description(): FormArray {
    return this.parent.get(this.group).get('description') as FormArray;
  }
  addDescription() {
    let control = this.parent.get(this.group).get('description') as FormArray;
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
}
