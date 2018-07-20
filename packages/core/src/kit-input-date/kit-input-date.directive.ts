import { Directive, forwardRef, Input, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { KitMomentProvider } from '../kit-moment/kit-moment-provider';
import { KitModelInterceptor } from '../kit-value-accessor/kit-model-interceptor';

/**
 * Displays date in an input in any format and store JS Date-object in model.
 *
 *
 * ### Usage
 *
 * Use the directive:
 *
 * ```html
 * <input [(ngModel)]="date"
 *        kitInputDate>
 * ```
 *
 * #### Format
 *
 * You can define rendering/parsing format:
 *
 * ```html
 * <input [(ngModel)]="date"
 *        kitInputDate
 *        format="YYYY/DD/MM">
 * ```
 *
 * __Requires Moment.js.__
 *
 *
 * ### Example
 *
 * * collection:date-picker -
 * [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-date-picker),
 * [demo](http://ngx-kit.com/collection/module/ui-date-picker)
 */
@Directive({
  selector: '[kitInputDate]',
  providers: [
    {
      provide: KitModelInterceptor,
      useExisting: forwardRef(() => KitInputDateDirective),
    },
  ],
})
export class KitInputDateDirective implements KitModelInterceptor, OnChanges {
  /**
   * @internal
   */
  @Input() kitInputDate: void;

  /**
   * `Date.toLocaleDateString()` options.
   */
  @Input() options: any = {};

  /**
   * Parse and render format (works only with moment.js).
   */
  @Input() format: string;

  readonly viewStateChanges = new Subject<string>();

  readonly modelStateChanges = new Subject<any>();

  private moment: any = null;

  constructor(private momentProvider: KitMomentProvider<any>) {
    this.moment = this.momentProvider.moment;
  }

  ngOnChanges() {
    if (this.format && !this.moment) {
      throw new Error(
        'KitInputDateDirective: Format option requires moment.js!\n' +
        '==========\n' +
        'Possible solution:\n' +
        '  1. Install moment: npm install moment\n' +
        '  2. Add "node_modules/moment/moment.js" to angular.json scripts section.\n' +
        '==========\n',
      );
    }
  }

  /**
   * Handle input changing by user.
   */
  input(value: string, event: any) {
    const date = this.parse(value);
    this.modelStateChanges.next(this.isValid(date) ? date : null);
  }

  keyDown(event: any) {
  }

  /**
   * Handle external modal changing.
   */
  writeValue(value: any) {
    const date = this.parse(value);
    this.viewStateChanges.next(
      this.isValid(date)
        ? this.moment && this.format ? this.moment(date).format(this.format) : date.toDateString()
        : '');
  }

  private parse(raw: any) {
    return this.moment && this.format
      ? this.moment(raw, this.format).toDate()
      : new Date(Date.parse(raw));
  }

  private isValid(raw: Date) {
    const date = new Date(raw);
    return !isNaN(date.getTime());
  }
}
