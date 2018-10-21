import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/shared/models/user.models';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Output()
  login = new EventEmitter<User>();

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  constructor(private fb: FormBuilder) {}

  send() {
    if (this.form.valid) {
      this.login.emit(this.form.value);
    }
  }
}
