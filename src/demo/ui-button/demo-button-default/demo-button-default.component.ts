import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-button-default',
  templateUrl: './demo-button-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoButtonDefaultComponent {
}
