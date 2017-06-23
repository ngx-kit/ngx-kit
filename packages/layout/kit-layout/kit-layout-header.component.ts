import { Component, HostBinding, Inject, OnInit } from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentLayoutHeader, KitComponentStyle } from '@ngx-kit/core';

@Component({
  selector: 'kit-layout-header',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitLayoutHeaderComponent implements OnInit {

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  constructor(private styler: StylerComponent,
              @Inject(kitComponentLayoutHeader) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

}
