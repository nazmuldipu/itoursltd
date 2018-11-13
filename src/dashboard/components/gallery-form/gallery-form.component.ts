import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges
} from '@angular/core';
import { Gallery } from 'src/shared/models/gallery.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.scss']
})
export class GalleryFormComponent implements OnChanges {
  @Input()
  gallery: Gallery;
  @Output()
  create = new EventEmitter<Gallery>();
  @Output()
  update = new EventEmitter<Gallery>();

  form: FormGroup;
  mouseoverShifting = false;
  edit = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges() {
    if (this.gallery != null && this.gallery.id != null) {
      this.edit = true;
      this.form.patchValue(this.gallery);
    }
  }

  createForm() {
    this.form = this.fb.group({
      eventDate: ['', Validators.required],
      title: ['', Validators.required],
      active: false,
      institute: ['', Validators.required],
      department: ['', Validators.required],
      duration: ['', Validators.required],
      details: ['', Validators.required],
      numberGuests: ['', Validators.required]
    });
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
