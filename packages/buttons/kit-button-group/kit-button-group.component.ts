import {
  AfterContentInit,
  Component,
  ContentChildren,
  forwardRef,
  Inject,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { kitComponentButtonGroup, KitComponentStyle } from '@ngx-kit/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitButtonGroupDirection } from '../interfaces';
import { KitButtonComponent } from '../kit-button/kit-button.component';

/**
 * @todo VALUE_ACCESSOR
 */
@Component({
  selector: 'kit-button-group,[kit-button-group],[kitButtonGroup]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitButtonGroupComponent implements OnInit, AfterContentInit {
  @ContentChildren(forwardRef(() => KitButtonComponent)) buttons: QueryList<KitButtonComponent>;

  @Input() kitButtonGroup: any;

  @Input() multiply = false;

  @Input() selectable = false;

  private _direction: KitButtonGroupDirection = 'horizontal';

  constructor(private styler: StylerComponent,
              @Inject(kitComponentButtonGroup) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  @Input()
  set direction(direction: KitButtonGroupDirection) {
    this._direction = direction;
    this.styler.host.applyState({direction});
    this.proxyToButtons();
  }

  ngAfterContentInit() {
    this.proxyToButtons();
    this.subscribeOnActions();
  }

  ngOnInit() {
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
