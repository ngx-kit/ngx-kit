import { Component, Inject, Input, OnInit, } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentMenuGroup } from '../core/meta/tokens';

@Component({
  selector: 'kit-menu-group,[kit-menu-group],[kitMenuGroup]',
  template: `
    <div styler="title">
      <ng-content select="[title]"></ng-content>
    </div>
    <div styler="items">
      <ng-content></ng-content>
    </div>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitMenuGroupComponent implements OnInit {
  @Input() kitMenuGroup: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentMenuGroup) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
