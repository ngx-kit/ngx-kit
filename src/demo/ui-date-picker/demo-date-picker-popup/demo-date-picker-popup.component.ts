import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-date-picker-popup',
  templateUrl: './demo-date-picker-popup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoDatePickerPopupComponent {
  model = '2018-01-02';

  opened = false;
}
