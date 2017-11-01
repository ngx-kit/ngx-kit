import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip-position',
  templateUrl: './demo-tooltip-position.component.html',
  styles: [`
    span {
      border: 1px solid #bbbbbb;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoTooltipPositionComponent {
}
