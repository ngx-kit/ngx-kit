import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-carousel-default',
  templateUrl: './demo-carousel-default.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCarouselDefaultComponent {
}
