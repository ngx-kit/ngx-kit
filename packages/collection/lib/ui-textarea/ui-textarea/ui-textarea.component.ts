import { ChangeDetectionStrategy, Component, Input, OnChanges, } from '@angular/core';
import { kitInputMiddleware, KitLimitMiddleware, KitMiddlewareManager } from '@ngx-kit/core';

@Component({
  // tslint:disable-next-line
  selector: 'textarea[uiTextarea]',
  template: '',
  styleUrls: ['./ui-textarea.component.scss'],
  providers: [
    KitMiddlewareManager,
    {
      provide: kitInputMiddleware,
      useClass: KitLimitMiddleware,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTextareaComponent implements OnChanges {
  @Input() limit: number;

  @Input() uiTextarea: void;

  constructor(private mw: KitMiddlewareManager) {
  }

  ngOnChanges() {
    // set limit for limit mid
    this.mw.update(KitLimitMiddleware, {
      enabled: !!this.limit,
      limit: this.limit,
    });
  }
}
