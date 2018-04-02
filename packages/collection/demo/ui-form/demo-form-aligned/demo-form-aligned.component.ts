import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-form-aligned',
  templateUrl: './demo-form-aligned.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoFormAlignedComponent {
  email: string;
  name: string;
}
