import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { CustomPackage } from 'src/shared/models/custom-package.model';

@Component({
  selector: 'custom-package-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './custom-package-form.component.html',
  styleUrls: ['./custom-package-form.component.scss']
})
export class CustomPackageFormComponent {
  @Output()
  create = new EventEmitter<CustomPackage>();
  // @Output()
  // update = new EventEmitter<CustomPackage>();

  form: FormGroup;
  mouseoverShifting = false;
  errorMessage = 'error';

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$')
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      startPlace: ['', Validators.required],
      date: ['', Validators.required],
      locations: this.fb.array([], Validators.required),
      places: this.fb.array([]),

      durationCoxBazar: '',
      durationSaintMartin: '',
      durationBandarban: '',
      durationRangamati: '',
      durationKhagrachari: '',
      durationSylhet: '',
      durationMoulovibazar: '',
      durationSunamgonj: '',
      durationSundarban: '',
      durationKuakata: '',

      visitorKids: ['', Validators.required],
      visitorChild: ['', Validators.required],
      visitorAdult: ['', Validators.required],
      mealType: ['', Validators.required],
      travelType: ['', Validators.required],
      hotelType: ['', Validators.required],
      hotelTypeText: '',
      roomType: ['', Validators.required],
      note: '',
      shipName: ''
    });
  }

  onLocationChange(locaiton: string, value) {
    let control = this.form.get('locations') as FormArray;
    if (value) {
      control.push(new FormControl(locaiton));
    } else {
      if ('Bandarban' == locaiton) {
        console.log('yes');
        let ctrl = this.form.get('places') as FormArray;
        for (let i = ctrl.value.length - 1; i >= 0; i--) {
          ctrl.removeAt(i);
        }
        // ctrl.reset([]);
      }
      control.removeAt(control.value.findIndex(loc => loc == locaiton));
    }
  }
  onPlaceChange(place: string, value) {
    let control = this.form.get('places') as FormArray;
    if (value) {
      control.push(new FormControl(place));
    } else {
      control.removeAt(control.value.findIndex(pla => pla == place));
    }
  }
  isContain(locaiton: string) {
    let control = this.form.get('locations') as FormArray;
    return control.value.includes(locaiton);
  }

  getFormValidationErrors() {
    this.errorMessage = '';

    Object.keys(this.form.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          this.errorMessage += key + ':' + keyError + ', '; // + controlErrors[keyError] + '; ';
        });
      }
    });
  }

  submit() {
    this.create.emit(this.form.value);
    this.form.reset();
    this.createForm();
  }
}
