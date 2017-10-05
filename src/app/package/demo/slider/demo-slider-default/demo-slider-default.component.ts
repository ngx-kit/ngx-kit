import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-slider-default',
  templateUrl: './demo-slider-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoSliderDefaultComponent {
  value = 150;
}
