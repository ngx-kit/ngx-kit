import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kit-form-demo-default',
  templateUrl: './form-demo-default.component.html',
})
export class FormDemoDefaultComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'name': [null, [Validators.required, Validators.minLength(4)]],
    });
  }
}
