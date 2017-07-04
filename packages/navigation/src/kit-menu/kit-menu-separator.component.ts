import { Component, HostBinding, Inject, Input, OnInit, } from '@angular/core';
import { kitComponentMenuSeparator, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';
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

  private _parentDirection: KitMenuDirection = 'vertical';

  constructor(private styler: StylerComponent,
              @Inject(kitComponentMenuSeparator) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  @Input()
  set parentDirection(parentDirection: KitMenuDirection) {
    this._parentDirection = parentDirection;
    this.styler.host.applyState({parentDirection});
  }

  ngOnInit() {
  }
}
