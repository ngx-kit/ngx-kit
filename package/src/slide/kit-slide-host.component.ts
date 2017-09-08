import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, } from '@angular/core';
import { StylerComponent, StylerModule } from '@ngx-kit/styler';
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

  @Input() kitSlideHost: null;

  constructor(private styler: StylerComponent,
              private cdr: ChangeDetectorRef) {
    styler.classPrefix = 'kit-slide-host';
  }

  ngOnChanges() {
  }

  ngOnInit() {
  }
}
