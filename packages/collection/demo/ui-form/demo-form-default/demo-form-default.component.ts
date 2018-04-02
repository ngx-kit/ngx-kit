import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-form-default',
  templateUrl: './demo-form-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoFormDefaultComponent {
  email: string;
  name: string;
}
