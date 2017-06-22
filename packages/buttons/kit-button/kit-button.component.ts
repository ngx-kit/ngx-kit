import { Component, HostBinding, Inject, Input, OnInit } from '@angular/core';

import { kitComponentButton, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

import { KitButtonGroupDirection } from '../interfaces';

@Component({
  selector: 'kit-button',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitButtonComponent implements OnInit {

  @Input() set size(size: string) {
    this.styler.host.applyState({size});
  }

  @Input() set type(type: string) {
    this.styler.host.applyState({type});
  }

  @Input() set disabled(disabled: boolean) {
    this.styler.host.applyState({disabled});
  }

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  constructor(private styler: StylerComponent,
              @Inject(kitComponentButton) private style: KitComponentStyle) {
    this.styler.register(this.style.getStyles());
  }

  ngOnInit() {
  }

  set grouped(direction: KitButtonGroupDirection) {
    this.styler.host.applyState({grouped: direction});
  }

}
