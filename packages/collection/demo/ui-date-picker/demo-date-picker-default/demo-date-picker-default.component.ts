import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-date-picker-default',
  templateUrl: './demo-date-picker-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoDatePickerDefaultComponent {
  model = '2018-01-01';
}
