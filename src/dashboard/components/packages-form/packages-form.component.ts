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

  form: FormGroup;
  mouseoverShifting = false;
  edit = false;
  domestic = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges() {
    if (this.package != null && this.package.id != null) {
      this.form.patchValue(this.package);
    }
  }

  createForm() {
    this.form = this.fb.group({
      country: ['', Validators.required],
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
    if (event) {
      this.form.controls.country.setValue('Bangladesh');
      this.domestic = true;
    } else {
      this.form.controls.country.setValue('');
      this.domestic = false;
    }
  }

  submit() {
    this.create.emit(this.form.value);
    this.form.reset();
    this.createForm();
  }
}
