import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-badge-color',
  templateUrl: './demo-badge-color.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoBadgeColorComponent {
}
