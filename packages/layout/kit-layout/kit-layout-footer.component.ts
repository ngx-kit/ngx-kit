import { Component, HostBinding, Inject, Input, OnInit } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentLayoutFooter, KitComponentStyle } from '@ngx-kit/core';

@Component({
  selector: 'kit-layout-footer,[kit-layout-footer],[kitLayoutFooter]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitLayoutFooterComponent implements OnInit {

  @Input() kitLayoutFooter: any;

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  constructor(private styler: StylerComponent,
              @Inject(kitComponentLayoutFooter) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

}
