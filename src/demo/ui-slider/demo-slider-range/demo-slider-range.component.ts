import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-slider-range',
  templateUrl: './demo-slider-range.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoSliderRangeComponent {
  value = [20, 70];
}
