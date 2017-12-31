import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-text-input',
  templateUrl: './demo-text-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoTextInputComponent {
  inputModel = '';
}
