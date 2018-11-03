import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnChanges,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';
import { Hotdeal } from 'src/shared/models/hotdeal.model';

@Component({
  selector: 'hotdeals-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hotdeals-form.component.html',
  styleUrls: ['./hotdeals-form.component.scss']
})
export class HotdealsFormComponent implements OnChanges {
  @Input()
  hotdeal: Hotdeal;
  @Output()
  create = new EventEmitter<Hotdeal>();
  @Output()
  update = new EventEmitter<Hotdeal>();

  form: FormGroup;
  mouseoverShifting = false;
  edit = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges() {
    if (this.hotdeal != null && this.hotdeal.id != null) {
      this.edit = true;
      this.form.patchValue(this.hotdeal);

      // Patch area array
      let ctrl = <FormArray>this.form.controls.taglines;
      ctrl.removeAt(0);
      this.hotdeal.taglines.forEach(ar => {
        if (ar.length > 0) {
          ctrl.push(new FormControl(ar));
        }
      });
    }
  }
  createForm() {
    this.form = this.fb.group({
      headline: ['', Validators.required],
      taglines: this.fb.array([''], Validators.required),
      price: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required],
      active: false,
      duration: ['', Validators.required],
      tourDate: ['', Validators.required],
      lastBookingDate: ['', Validators.required]
    });
  }

  get taglines(): FormArray {
    return this.form.get('taglines') as FormArray;
  }
  addTaglines() {
    let control = this.form.get('taglines') as FormArray;
    control.push(new FormControl(''));
  }

  submit() {
    if (this.edit) {
      this.update.emit(this.form.value);
    } else {
      this.create.emit(this.form.value);
    }
    this.form.reset();
    this.createForm();
  }
}
