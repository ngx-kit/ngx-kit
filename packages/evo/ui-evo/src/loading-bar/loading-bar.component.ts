import { animate, sequence, state, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Loading, loadingGlobal, LoadingState } from '@ngx-kit/evo/loading';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ui-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('bar', [
      state(LoadingState.None, style({
        transform: 'translateX(-100%)',
        opacity: 0,
      })),
      state(LoadingState.InProgress, style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition(`${LoadingState.None} => ${LoadingState.InProgress}`, [
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
      transition(`${LoadingState.InProgress} => ${LoadingState.None}`,
        sequence([
          animate('150ms ease-in', style({
            opacity: 1,
            transform: 'translateX(0)',
          })),
          animate('150ms', style({
            opacity: 0,
          })),
          animate('10ms', style({
            transform: 'translateX(-100%)',
          })),
        ])),
    ]),
  ],
})
export class LoadingBarComponent implements OnInit, OnChanges, OnDestroy {
  @Input() id = loadingGlobal;

  barState = LoadingState.None;

  private destroy = new Subject<void>();

  private idChange = new Subject<void>();

  constructor(
    private loading: Loading,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.handleState();
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('id' in changes) {
      this.handleState();
    }
  }

  private handleState() {
    this.idChange.next();
    this.barState = this.loading.progress(this.id).state;
    this.loading
      .progress(this.id)
      .stateChanges
      .pipe(
        takeUntil(this.destroy),
        takeUntil(this.idChange),
        debounceTime(10),
      )
      .subscribe(s => {
        this.barState = s;
        this.cdr.detectChanges();
      });
  }
}
