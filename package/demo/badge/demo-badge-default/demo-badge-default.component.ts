import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-badge-default',
  templateUrl: './demo-badge-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoBadgeDefaultComponent {
}
