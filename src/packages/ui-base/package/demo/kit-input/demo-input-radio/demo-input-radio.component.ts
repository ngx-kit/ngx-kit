import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-input-radio',
  templateUrl: './demo-input-radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoInputRadioComponent {
  radioModel = '';
}
