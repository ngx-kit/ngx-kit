import {
  AfterContentInit, Component, ContentChildren, forwardRef, HostBinding, Inject, Input, OnInit, QueryList,
} from '@angular/core';

import { kitComponentButtonGroup, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';

import { KitButtonComponent } from '../kit-button/kit-button.component';
import { KitButtonGroupDirection } from '../interfaces';

/**
 * @todo VALUE_ACCESSOR
 */
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

  @Input() selectable = false;

  @Input() multiply = false;

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  @ContentChildren(forwardRef(() => KitButtonComponent)) buttons: QueryList<KitButtonComponent>;

  private _direction: KitButtonGroupDirection = 'horizontal';

  constructor(private styler: StylerComponent,
              @Inject(kitComponentButtonGroup) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.proxyToButtons();
    this.subscribeOnActions();
  }

  private proxyToButtons(): void {
    if (this.buttons) {
      this.buttons.forEach(button => {
        button.grouped = this._direction;
      });
    }
  }

  private subscribeOnActions(): void {
    // @todo unsub
    this.buttons.forEach(button => {
      button.action.subscribe(() => {
        if (this.selectable) {
          // deselect other if needed
          if (!button.selected && !this.multiply) {
            this.buttons.filter(b => b !== button).forEach(b => b.pushSelected(false));
          }
          // toggle button selection
          button.pushSelected(!button.selected);
        }
      });
    });
  }

}
