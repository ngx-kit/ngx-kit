import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-button-size',
  templateUrl: './demo-button-size.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoButtonSizeComponent {
}
