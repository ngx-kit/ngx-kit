import {
  Component, HostBinding, Inject, Input, OnInit,
} from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentMenuSeparator, KitComponentStyle } from '@ngx-kit/core';

import { KitMenuDirection } from '../interfaces';

@Component({
  selector: 'kit-menu-separator,[kit-menu-separator],[kitMenuSeparator]',
  template: `
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitMenuSeparatorComponent implements OnInit {

  @Input() kitMenuSeparator: any;

  @Input() set parentDirection(parentDirection: KitMenuDirection) {
    this._parentDirection = parentDirection;
    this.styler.host.applyState({parentDirection});
  }

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  private _parentDirection: KitMenuDirection = 'vertical';

  constructor(private styler: StylerComponent,
              @Inject(kitComponentMenuSeparator) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

}
