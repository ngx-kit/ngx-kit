import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'demo-form-default',
  templateUrl: './demo-form-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoFormDefaultComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'name': [null, [Validators.required, Validators.minLength(4)]],
    });
  }
}
