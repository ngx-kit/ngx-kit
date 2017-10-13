import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-alert-title',
  templateUrl: './demo-alert-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoAlertTitleComponent {
}
