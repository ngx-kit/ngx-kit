import { Component, Inject, Input, OnInit } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentDivider } from '../core/meta/tokens';
import { KitComponentStyle } from '../core/meta/component';

/**
 * @todo add vertical setting
 * @todo solve :empty auto-format collision
 */
@Component({
  selector: 'kit-divider,[kitDivider]',
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

  constructor(private styler: StylerComponent,
              @Inject(kitComponentDivider) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
