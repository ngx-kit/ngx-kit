import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'demo-form-combined',
  templateUrl: './demo-form-combined.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoFormCombinedComponent {
  @ViewChild(NgForm) ngForm: NgForm;

  email: string;

  name: string;

  rememberMe: boolean;

  type: 'customer' | 'merchant';

  submit() {
    if (this.ngForm.valid) {
      alert('Form valid!');
    }
  }
}
