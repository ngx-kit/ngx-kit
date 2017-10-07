import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-rating-default',
  templateUrl: './demo-rating-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoRatingDefaultComponent {
}
