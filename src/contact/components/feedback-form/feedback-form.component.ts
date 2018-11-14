import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Feedback } from 'src/shared/models/feedback.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent {
  @Output()
  create = new EventEmitter<Feedback>();

  form: FormGroup;
  mouseoverShifting = false;

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
      message: ['', Validators.required]
    });
  }

  submit() {
    this.create.emit(this.form.value);
    this.form.reset();
    this.createForm();
  }
}
