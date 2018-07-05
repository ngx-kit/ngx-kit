import { Directive, forwardRef, Input, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { KitPlatformService } from '../kit-platform/kit-platform.service';
import { KitModelInterceptor } from '../kit-value-accessor/kit-model-interceptor';

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

  constructor(private platform: KitPlatformService) {
    this.moment = this.platform.getMoment();
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
