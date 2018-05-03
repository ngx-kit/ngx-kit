import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { KitSlideHostService } from '@ngx-kit/core';

/**
 * @apiOrder 1
 */
@Component({
  selector: 'ui-carousel',
  template: `
    <div class="wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./ui-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitSlideHostService,
  ],
})
export class UiCarouselComponent {
  @Input() cycle = true;

  constructor(
    private host: KitSlideHostService,
  ) {
  }

  @HostListener('swipeleft') swipeleftHandler() {
    this.host.next(this.cycle);
  }

  @HostListener('swiperight') swiperightHandler() {
    this.host.prev(this.cycle);
  }

  @HostListener('tap') tapHandler() {
    this.host.prev(this.cycle);
  }
}
