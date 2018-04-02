import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-toggle-default',
  templateUrl: './demo-toggle-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoToggleDefaultComponent {
  toggleModel = false;
}
