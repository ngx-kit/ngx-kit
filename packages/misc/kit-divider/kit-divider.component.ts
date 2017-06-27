import { Component, HostBinding, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentDivider, KitComponentStyle } from '@ngx-kit/core';

/**
 * @todo add vertical setting
 */

@Component({
  selector: 'kit-divider,[kit-divider],[kitDivider]',
  template: `
    <div styler="line"></div>
    <div styler="text"><ng-content></ng-content></div>
    <div styler="line"></div>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitDividerComponent implements OnInit {

  @Input() kitDivider: any;

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  constructor(private styler: StylerComponent,
              @Inject(kitComponentDivider) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

}
