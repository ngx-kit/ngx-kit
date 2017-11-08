import { ChangeDetectionStrategy, Component, Input, OnChanges, } from '@angular/core';
import {
  kitInputMiddleware,
  KitLimitMiddleware,
  KitMathParseMiddleware,
  KitMiddlewareManager,
} from '@ngx-kit/core';

@Component({
  // tslint:disable-next-line
  selector: 'input[uiInput]',
  template: '',
  styleUrls: ['./ui-input.component.scss'],
  providers: [
    KitMiddlewareManager,
    {
      provide: kitInputMiddleware,
      useClass: KitMathParseMiddleware,
      multi: true,
    },
    {
      provide: kitInputMiddleware,
      useClass: KitLimitMiddleware,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputComponent implements OnChanges {
  @Input() limit: number;

  /**
   * Automatically parse and evaluate basic math expressions.
   */
  @Input() math = false;

  @Input() uiInput: void;

  constructor(private mw: KitMiddlewareManager) {
  }

  /**
   * @todo validate params: math&checkbox-radio collision
   * @todo incapsulate params passing
   */
  ngOnChanges() {
    // set enabled for math mid
    this.mw.update(KitMathParseMiddleware, {
      enabled: this.math,
    });
    // set limit for limit mid
    this.mw.update(KitLimitMiddleware, {
      enabled: !!this.limit,
      limit: this.limit,
    });
  }
}
