import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-form-demo.component.html',
})
export class UiFormDemoComponent {
  form1 = {
    email: '',
    name: '',
  };

  form2: FormGroup;

  form3 = {
    email: '',
    name: '',
  };

  form4 = {
    email: '',
    name: '',
  };

  constructor(private builder: FormBuilder) {
    this.form2 = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      name: [''],
    });
  }
}
