import {
  Component,
  OnChanges,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Package } from 'src/shared/models/package.model';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'packages-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './packages-form.component.html',
  styleUrls: ['./packages-form.component.scss']
})
export class PackagesFormComponent implements OnChanges {
  @Input()
  package: Package;
  @Output()
  create = new EventEmitter<Package>();

  form: FormGroup;
  mouseoverShifting = false;
  edit = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges() {}

  createForm() {
    this.form = this.fb.group({
      country: ['', Validators.required],
      title: ['', Validators.required],
      domestic: false,
      active: false,
      area: this.fb.array([''], Validators.required),
      subArea: this.fb.array([''], Validators.required),
      category: this.fb.array([''], Validators.required),
      regularPackage: this.fb.group({
        headline: ['', Validators.required],
        taglines: this.fb.array([''], Validators.required),
        duration: ['', Validators.required],
        price: ['', Validators.required],
        description: this.fb.array([''], Validators.required),
        inclusions: this.fb.array([''], Validators.required),
        exclusions: this.fb.array([''], Validators.required)
      }),
      deluxePackage: this.fb.group({
        headline: ['', Validators.required],
        taglines: this.fb.array([''], Validators.required),
        duration: ['', Validators.required],
        price: ['', Validators.required],
        description: this.fb.array([''], Validators.required),
        inclusions: this.fb.array([''], Validators.required),
        exclusions: this.fb.array([''], Validators.required)
      }),
      crownPackage: this.fb.group({
        headline: ['', Validators.required],
        taglines: this.fb.array([''], Validators.required),
        duration: ['', Validators.required],
        price: ['', Validators.required],
        description: this.fb.array([''], Validators.required),
        inclusions: this.fb.array([''], Validators.required),
        exclusions: this.fb.array([''], Validators.required)
      })
    });
  }

  get area(): FormArray {
    return this.form.get('area') as FormArray;
  }
  addArea() {
    let control = this.form.get('area') as FormArray;
    control.push(new FormControl(''));
  }
  get subArea(): FormArray {
    return this.form.get('subArea') as FormArray;
  }
  addSubArea() {
    let control = this.form.get('subArea') as FormArray;
    control.push(new FormControl(''));
  }
  get category(): FormArray {
    return this.form.get('category') as FormArray;
  }
  addCategory() {
    let control = this.form.get('category') as FormArray;
    control.push(new FormControl(''));
  }
  get RegularTaglines(): FormArray {
    return this.form.get('regularPackage').get('taglines') as FormArray;
  }
  addRegularTaglines() {
    let control = this.form.get('regularPackage').get('taglines') as FormArray;
    control.push(new FormControl(''));
  }
  // get RegularDescription(): FormArray {
  //   return this.form.get('regularPackage').get('description') as FormArray;
  // }
  // addRegularDescription() {
  //   let control = this.form
  //     .get('regularPackage')
  //     .get('description') as FormArray;
  //   control.push(new FormControl(''));
  // }

  submit() {
    console.log(this.form.value);
    // console.log(this.form.controls.regularPackage.controls.headline.errors);
  }
}
