import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-button-group-checkbox',
  templateUrl: './demo-button-group-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoButtonGroupCheckboxComponent {
  buttonModel1 = false;

  buttonModel2 = false;

  buttonModel3 = false;
}
