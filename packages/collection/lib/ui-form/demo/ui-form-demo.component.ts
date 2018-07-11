import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './ui-form-demo.component.html',
})
export class UiFormDemoComponent {
  form1 = {
    email: '',
    password: '',
  };

  form2: FormGroup;

  form3 = {
    email: '',
    password: '',
  };

  form4 = {
    email: '',
    password: '',
  };

  constructor(private builder: FormBuilder) {
    this.form2 = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      name: [''],
    });
  }
}
