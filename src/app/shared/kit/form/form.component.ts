import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() content: Content;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'name': [null, [Validators.required, Validators.minLength(4)]],
    });
  }
}
