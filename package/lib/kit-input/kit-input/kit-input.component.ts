import { ChangeDetectionStrategy, Component, Inject, Input, OnChanges, } from '@angular/core';
import { kitInputMiddleware, KitInputMiddleware, KitLimitMiddleware, KitMathParseMiddleware, } from '@ngx-kit/ngx-kit';

@Component({
  // tslint:disable-next-line
  selector: 'input[kitInput]',
  template: '',
  styleUrls: ['./kit-input.component.scss'],
  providers: [
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
export class KitInputComponent implements OnChanges {
  @Input() kitInput: void;

  @Input() limit: number;

  /**
   * Automatically parse and evaluate basic math expressions.
   */
  @Input() math = false;

  constructor(@Inject(kitInputMiddleware) private mids: KitInputMiddleware[]) {
  }

  /**
   * @todo validate params: math&checkbox-radio collision
   * @todo incapsulate params passing
   */
  ngOnChanges() {
    // set enabled for math mid
    this.mids
        .filter(m => m instanceof KitMathParseMiddleware)
        .forEach(m => {
          m.enabled = this.math;
        });
    // set limit for limit mid
    this.mids
        .filter(m => m instanceof KitLimitMiddleware)
        .forEach((m: KitLimitMiddleware) => {
          m.enabled = !!this.limit;
          m.limit = this.limit;
        });
  }
}
