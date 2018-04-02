import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-radio-default',
  templateUrl: './demo-radio-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoRadioDefaultComponent {
  radioModel = 'A';
}
