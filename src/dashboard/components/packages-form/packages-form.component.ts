import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Package } from 'src/shared/models/package.model';

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

  @Output()
  update = new EventEmitter<Package>();

  form: FormGroup;
  mouseoverShifting = false;
  edit = false;
  domestic = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges() {
    if (this.package != null && this.package.id != null) {
      this.edit = true;
      this.form.patchValue(this.package);

      // Patch area array
      let ctrl = <FormArray>this.form.controls.area;
      ctrl.removeAt(0);
      this.package.area.forEach(ar => {
        if (ar.length > 0) {
          ctrl.push(new FormControl(ar));
        }
      });

      // Patch subArea array
      ctrl = <FormArray>this.form.controls.subArea;
      ctrl.removeAt(0);
      this.package.subArea.forEach(ar => {
        if (ar.length > 0) {
          ctrl.push(new FormControl(ar));
        }
      });

      // Patch category array
      ctrl = <FormArray>this.form.controls.category;
      ctrl.removeAt(0);
      this.package.category.forEach(ar => {
        if (ar.length > 0) {
          ctrl.push(new FormControl(ar));
        }
      });
    }
  }

  createForm() {
    this.form = this.fb.group({
      country: this.fb.array([''], Validators.required),
      title: ['', Validators.required],
      domestic: false,
      active: false,
      area: this.fb.array([''], Validators.required),
      subArea: this.fb.array([''], Validators.required),
      category: this.fb.array([''], Validators.required),
      regularPackage: this.createPackages(),
      deluxePackage: this.createPackages(),
      crownPackage: this.createPackages()
    });
  }

  createPackages() {
    return this.fb.group({
      headline: '',
      taglines: this.fb.array(['']),
      duration: '',
      price: '',
      description: this.fb.array([this.createDescriptionArray()]),
      inclusions: this.fb.array(['']),
      exclusions: this.fb.array([''])
    });
  }

  createDescriptionArray() {
    return this.fb.group({
      head: '',
      texts: this.fb.array([''])
    });
  }

  get country(): FormArray {
    return this.form.get('country') as FormArray;
  }
  addCountry() {
    let control = this.form.get('country') as FormArray;
    console.log(control.controls.values);
    control.push(new FormControl(''));
  }

  get area(): FormArray {
    return this.form.get('area') as FormArray;
  }
  addArea() {
    let control = this.form.get('area') as FormArray;
    console.log(control.controls.values);
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

  onDomesticChange(event) {
    let control = this.form.get('country') as FormArray;
    if (event) {
      for(let i = control.length - 1; i >= 0; i--){
        control.removeAt(i);
      }
      control.push(new FormControl('Bangladesh'));
      this.domestic = true;
    } else {
      for(let i = control.length - 1; i >= 0; i--){
        control.removeAt(i);
      }
      control.push(new FormControl(''));
      this.domestic = false;
    }
  }

  submit() {
    if (this.edit) {
      this.update.emit(this.form.value);
    } else {
      this.create.emit(this.form.value);
    }
    this.edit = false;
    this.form.reset();
    this.createForm();
  }
}
