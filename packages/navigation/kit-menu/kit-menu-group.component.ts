import {
  Component, HostBinding, Inject, Input, OnInit,
} from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentMenuGroup, KitComponentStyle } from '@ngx-kit/core';

@Component({
  selector: 'kit-menu-group,[kit-menu-group],[kitMenuGroup]',
  template: `
    <ng-content select="[title]"></ng-content>
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitMenuGroupComponent implements OnInit {

  @Input() kitMenuGroup: any;

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  constructor(private styler: StylerComponent,
              @Inject(kitComponentMenuGroup) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
  
}
