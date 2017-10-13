import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-button-group-default',
  templateUrl: './demo-button-group-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoButtonGroupDefaultComponent {
}
