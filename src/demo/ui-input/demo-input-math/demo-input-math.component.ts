import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-input-math',
  templateUrl: './demo-input-math.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoInputMathComponent {
  inputModel = null;
}
