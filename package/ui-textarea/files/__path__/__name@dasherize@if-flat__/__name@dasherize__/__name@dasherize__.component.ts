import { ChangeDetectionStrategy, Component, Inject, Input, OnChanges, } from '@angular/core';
import { kitInputMiddleware, KitInputMiddleware, KitLimitMiddleware } from '@ngx-kit/ngx-kit';

@Component({
  // tslint:disable-next-line
  selector: 'textarea[<%= camelize(name) %>]',
  template: '',
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  providers: [
    {
      provide: kitInputMiddleware,
      useClass: KitLimitMiddleware,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>Component implements OnChanges {
  @Input() limit: number;

  @Input() <%= camelize(name) %>: void;

  constructor(@Inject(kitInputMiddleware) private mids: KitInputMiddleware[]) {
  }

  ngOnChanges() {
    // set limit for limit mid
    this.mids
        .filter(m => m instanceof KitLimitMiddleware)
        .forEach((m: KitLimitMiddleware) => {
          m.enabled = !!this.limit;
          m.limit = this.limit;
        });
  }
}
