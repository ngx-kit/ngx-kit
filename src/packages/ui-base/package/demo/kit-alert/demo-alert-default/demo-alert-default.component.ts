import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-alert-default',
  templateUrl: './demo-alert-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoAlertDefaultComponent {
}
