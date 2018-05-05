import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { KitLoadingBarService, KitLoadingBarState } from '@ngx-kit/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * @apiOrder 1
 */
@Component({
  selector: 'ui-loading-bar',
  template: `
    <div [@bar]="barState" class="bar"></div>
  `,
  styleUrls: ['./ui-loading-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('bar', [
      state('none', style({
        transform: 'translateX(-100%)',
        opacity: 0,
      })),
      state('in-progress', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition(`${KitLoadingBarState.None} => ${KitLoadingBarState.InProgress}`, [
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
        }),
        animate('50ms', style({
          opacity: 1,
        })),
        animate('50000ms cubic-bezier(0,1.13,.32,.91)', style({
          transform: 'translateX(0)',
        })),
      ]),
      transition(`${KitLoadingBarState.InProgress} => ${KitLoadingBarState.None}`, [
        animate('150ms ease-in', style({
          opacity: 1,
          transform: 'translateX(0)',
        })),
        animate('150ms', style({
          opacity: 0,
        })),
      ]),
    ]),
  ],
})
export class UiLoadingBarComponent implements OnInit, OnDestroy {
  barState = 'none';

  private destroy = new Subject<void>();

  constructor(
    private service: KitLoadingBarService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  ngOnInit() {
    this.service.barStateChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(s => {
        this.barState = s;
        this.cdr.markForCheck();
      });
  }
}
