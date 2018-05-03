import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-slider-default',
  templateUrl: './demo-slider-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoSliderDefaultComponent {
  value1 = 5;
  value2 = 150;
  value3 = 75;
}
