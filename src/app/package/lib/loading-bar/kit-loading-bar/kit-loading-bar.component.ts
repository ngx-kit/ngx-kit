import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, } from '@angular/core';
import { KitLoadingBarService } from '@ngx-kit/ngx-kit';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

/**
 * @apiOrder 1
 */
@Component({
  selector: 'kit-loading-bar,[kitLoadingBar]',
  template: `
    <div [@bar]="barState" class="bar"></div>
  `,
  styleUrls: ['./kit-loading-bar.component.scss'],
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
      transition('none => in-progress', [
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
      transition('in-progress => none', [
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
export class KitLoadingBarComponent implements OnInit, OnDestroy {
  barState: string;

  private destroy$ = new Subject<void>();

  constructor(private service: KitLoadingBarService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  ngOnInit() {
    this.service.barState$
        .takeUntil(this.destroy$)
        .subscribe(state => {
          this.barState = state;
          this.cdr.markForCheck();
        });
  }
}
