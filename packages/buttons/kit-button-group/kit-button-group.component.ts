import {
  AfterContentInit, Component, ContentChildren, forwardRef, HostBinding, Inject, Input, OnInit, QueryList,
} from '@angular/core';

import { kitComponentButtonGroup, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

import { KitButtonComponent } from '../kit-button/kit-button.component';
import { KitButtonGroupDirection } from '../interfaces';

@Component({
  selector: 'kit-button-group',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitButtonGroupComponent implements OnInit, AfterContentInit {

  @Input() set direction(direction: KitButtonGroupDirection) {
    this._direction = direction;
    this.styler.host.applyState({direction});
    this.proxyToButtons();
  }

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  @ContentChildren(forwardRef(() => KitButtonComponent)) buttons: QueryList<KitButtonComponent>;

  private _direction: KitButtonGroupDirection = 'horizontal';

  constructor(private styler: StylerComponent,
              @Inject(kitComponentButtonGroup) private style: KitComponentStyle) {
    this.styler.register(this.style.getStyles());
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.proxyToButtons();
  }

  private proxyToButtons() {
    if (this.buttons) {
      this.buttons.forEach(button => {
        button.grouped = this._direction;
      });
    }
  }

}
