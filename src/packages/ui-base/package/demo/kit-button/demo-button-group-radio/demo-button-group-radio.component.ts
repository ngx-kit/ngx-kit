import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-button-group-radio',
  templateUrl: './demo-button-group-radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoButtonGroupRadioComponent {
  buttonModel = 1;
}
