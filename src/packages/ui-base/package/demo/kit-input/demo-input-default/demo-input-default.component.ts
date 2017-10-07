import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-input-default',
  templateUrl: './demo-input-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoInputDefaultComponent {
  inputModel = '';
}
