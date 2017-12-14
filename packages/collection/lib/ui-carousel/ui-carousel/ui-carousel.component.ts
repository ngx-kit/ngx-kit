import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnInit } from '@angular/core';
import { KitSlideHostService } from '@ngx-kit/core';
import { from } from 'rxjs/observable/from';
import { interval } from 'rxjs/observable/interval';
import { merge } from 'rxjs/observable/merge';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

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
export class UiCarouselComponent implements OnInit {
  /**
   * Slide auto-changing interval.
   */
  @Input() interval = 5000;

  private clicks = new Subject<void>();

  constructor(
    private host: KitSlideHostService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    // auto-rotate slides, skip rotation if click handled
    merge(from([1]), interval(this.interval), this.clicks)
      .pipe(debounceTime(this.interval))
      .subscribe(() => {
        this.host.rotate();
        this.cdr.markForCheck();
      });
  }

  @HostListener('click')
  clickHandler() {
    this.host.rotate();
    this.clicks.next();
  }
}
