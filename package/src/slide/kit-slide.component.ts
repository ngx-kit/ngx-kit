import { animate, AnimationEvent, query, stagger, state, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
} from '@angular/core';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { uuid } from '../util/uuid';
import { KitSlideHostComponent } from './kit-slide-host.component';
import { KitSlideStyle } from './kit-slide.style';
import { KitSlideAnimation } from './meta';

/**
 * @todo add "none" animation
 * @todo fade, swap, flip animations
 */
@Component({
  selector: 'kit-slide,[kitSlide]',
  template: `
    <ng-content></ng-content>
  `,
  animations: [
    trigger('slide', [
      state('slide-right', style({
        transform: 'translateX(0)',
      })),
      state('slide-left', style({
        transform: 'translateX(0)',
      })),
      // entering
      transition('void => slide-top', [
        style({transform: 'translateY(100%)'}),
        animate('{{timings}}'),
      ]),
      transition('void => slide-right', [
        style({transform: 'translateX(-100%)'}),
        animate('{{timings}}'),
      ]),
      transition('void => slide-bottom', [
        style({transform: 'translateY(-100%)'}),
        animate('{{timings}}'),
      ]),
      transition('void => slide-left', [
        style({transform: 'translateX(100%)'}),
        animate('{{timings}}'),
      ]),
      // leaving
      transition('slide-top => void', [
        animate('{{timings}}', style({transform: 'translateY(-100%)'})),
      ]),
      transition('slide-right => void', [
        animate('{{timings}}', style({transform: 'translateX(100%)'})),
      ]),
      transition('slide-bottom => void', [
        animate('{{timings}}', style({transform: 'translateY(100%)'})),
      ]),
      transition('slide-left => void', [
        animate('{{timings}}', style({transform: 'translateX(-100%)'})),
      ]),
    ]),
  ],
  viewProviders: [
    StylerModule.forComponent(KitSlideStyle),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitSlideComponent implements OnChanges, OnInit, OnDestroy {
  animated = false;

  id = uuid();

  @Input() kitSlide: null;

  leaving = false;

  @HostBinding('@slide') slideTrigger: any;

  private destroy$ = new Subject();

  constructor(private styler: StylerComponent,
              @Optional() private host: KitSlideHostComponent,
              private cdr: ChangeDetectorRef) {
    styler.classPrefix = 'kit-slide';
  }

  ngOnChanges() {
    this.bindSlideTrigger();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  ngOnInit() {
    if (this.host) {
      this.host.animation$
          .takeUntil(this.destroy$)
          .subscribe(a => {
            this.bindSlideTrigger(a);
          });
    }
  }

  @HostListener('@slide.done')
  slideDone() {
    this.animated = false;
    this.stylerApply();
  }

  @HostListener('@slide.start', ['$event'])
  slideStart(event: AnimationEvent) {
    this.animated = true;
    if (event.toState === 'void') {
      this.leaving = true;
    }
    this.stylerApply();
  }

  stylerApply() {
    this.styler.host.applyState({
      animated: this.animated,
      leaving: this.leaving,
    });
  }

  private bindSlideTrigger(animation: KitSlideAnimation = 'slide-right') {
    this.slideTrigger = {
      value: animation,
      params: {
        timings: '250ms cubic-bezier(0.0, 0.0, 0.2, 1)',
      },
    }
  }
}
