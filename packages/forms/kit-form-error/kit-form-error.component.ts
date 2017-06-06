import { AfterViewInit, Component, HostBinding, Inject, Input, OnInit } from '@angular/core';

import { kitComponentFormError, KitFormErrorStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

import { KitFormGroupComponent } from '../kit-form-group/kit-form-group.component';

/**
 * @todo default [touched], [dirty] via DI
 */
@Component({
  selector: 'kit-form-error',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitFormErrorComponent implements OnInit, AfterViewInit {

  @Input() validator: string;
  @Input() touched: boolean = false;
  @Input() dirty: boolean = false;

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  }

  constructor(private styler: StylerComponent,
              @Inject(kitComponentFormError) private style: KitFormErrorStyle,
              private formGroup: KitFormGroupComponent) {
    this.styler.register(this.style.getStyles());
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (!this.validator) {
      throw new Error('kit-form-error: validator attribute is required!');
    }
  }

  init() {
    this.formGroup.statusChanges.subscribe(status => {
      const hasError = this.formGroup.hasError(this.validator);
      const visible = hasError && (!this.touched || status.touched) && (!this.dirty || status.dirty);
      console.log('ER-ST-CH', {hasError, status, visible});
      this.styler.host.applyState({visible});
    });
  }

}
