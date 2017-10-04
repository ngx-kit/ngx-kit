import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnInit } from '@angular/core';
import { KitSlideHostService } from '@ngx-kit/ngx-kit';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/**
 * @apiOrder 1
 */
@Component({
  selector: 'kit-carousel,[kitCarousel]',
  template: `
    <div class="wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./kit-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitSlideHostService,
  ],
})
export class KitCarouselComponent implements OnInit {
  /**
   * Slide auto-changing interval.
   */
  @Input() interval = 5000;

  @Input() kitCarousel: void;

  private click$ = new Subject<void>();

  constructor(private host: KitSlideHostService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    // auto-rotate slides, skip rotation if click handled
    Observable
        .merge(Observable.from([1]), Observable.interval(this.interval), this.click$)
        .debounceTime(this.interval)
        .subscribe(() => {
          this.host.rotate();
          this.cdr.markForCheck();
        });
  }

  @HostListener('click')
  clickHandler() {
    this.host.rotate();
    this.click$.next();
  }
}
