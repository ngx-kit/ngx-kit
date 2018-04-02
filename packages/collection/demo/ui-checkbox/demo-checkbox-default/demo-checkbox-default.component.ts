import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-checkbox-default',
  templateUrl: './demo-checkbox-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCheckboxDefaultComponent {
  checkboxModel = true;
}
