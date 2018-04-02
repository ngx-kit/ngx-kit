import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'demo-form-reactive',
  templateUrl: './demo-form-reactive.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoFormReactiveComponent {
  form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      name: [''],
    });
  }
}
