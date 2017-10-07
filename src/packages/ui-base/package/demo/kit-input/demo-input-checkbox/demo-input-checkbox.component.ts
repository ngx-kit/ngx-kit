import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-input-checkbox',
  templateUrl: './demo-input-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoInputCheckboxComponent {
  checkboxModel1 = false;

  checkboxModel2 = false;
}
