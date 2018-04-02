import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-form-inline',
  templateUrl: './demo-form-inline.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoFormInlineComponent {
  email: string;
  name: string;
}
