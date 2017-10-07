import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-alert-color',
  templateUrl: './demo-alert-color.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoAlertColorComponent {
}
