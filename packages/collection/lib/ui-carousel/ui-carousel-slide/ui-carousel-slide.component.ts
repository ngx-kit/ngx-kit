import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy } from '@angular/core';
import { KitSlideDirection, KitSlideHostService } from '@ngx-kit/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

/**
 * @apiOrder 2
 */
@Component({
  selector: 'ui-carousel-slide',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-carousel-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      // entering
      transition('void => prev', [
        style({transform: 'translateX(-100%)'}),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)'),
      ]),
      transition('void => next', [
        style({transform: 'translateX(100%)'}),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)'),
      ]),
      // leaving
      transition('prev => void', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
        }),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateX(100%)'})),
      ]),
      transition('next => void', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
        }),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateX(-100%)'})),
      ]),
    ]),
  ],
})
export class UiCarouselSlideComponent implements OnDestroy {
  @HostBinding('@slide') slideTrigger: KitSlideDirection;

  private destroy = new Subject<void>();

  constructor(
    private host: KitSlideHostService,
    private cdr: ChangeDetectorRef,
  ) {
    this.host.directionChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(d => {
        this.slideTrigger = d;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
