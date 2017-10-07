import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-tabs-default',
  templateUrl: './demo-tabs-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoTabsDefaultComponent {
}
