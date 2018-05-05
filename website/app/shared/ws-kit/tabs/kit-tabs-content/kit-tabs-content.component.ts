import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { KitSlideDirection, KitSlideHostService } from '@ngx-kit/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * @apiOrder 4
 */
@Component({
  selector: 'ws-kit-tabs-content,[wsKitTabsContent]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./kit-tabs-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      // entering
      transition('void => next', [
        style({transform: 'translateX(-100%)'}),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)'),
      ]),
      transition('void => prev', [
        style({transform: 'translateX(100%)'}),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)'),
      ]),
      // leaving
      transition('next => void', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
        }),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateX(100%)'})),
      ]),
      transition('prev => void', [
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
export class KitTabsContentComponent implements OnDestroy {
  @Input() kitTabsContent: void;

  @HostBinding('@slide') slideTrigger: KitSlideDirection;

  private destroy$ = new Subject<void>();

  constructor(private host: KitSlideHostService) {
    this.host.directionChanges
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(d => {
        this.slideTrigger = d;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
