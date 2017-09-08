import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { KitSlideHostStyle } from './kit-slide-host.style';
import { KitSlideAnimation } from './meta';

@Component({
  selector: 'kit-slide-host,[kitSlideHost]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerModule.forComponent(KitSlideHostStyle),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitSlideHostComponent implements OnChanges, OnInit {
  @Input() animation: KitSlideAnimation = 'slide-right';

  animation$ = new BehaviorSubject<KitSlideAnimation>(this.animation);

  @Input() kitSlideHost: null;

  constructor(private styler: StylerComponent,
              private cdr: ChangeDetectorRef) {
    styler.classPrefix = 'kit-slide-host';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['animation']) {
      this.animation$.next(this.animation);
    }
  }

  ngOnInit() {
  }
}
