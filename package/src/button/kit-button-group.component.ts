import {
  AfterContentInit, ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  Inject,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitButtonGroupStyle } from '../core/meta/tokens';
import { KitButtonGroupDirection } from './meta';
import { KitButtonComponent } from './kit-button.component';

/**
 * @todo VALUE_ACCESSOR or move to kit-radio-group
 */
@Component({
  selector: 'kit-button-group,[kit-button-group],[kitButtonGroup]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitButtonGroupComponent implements OnInit, AfterContentInit {
  @ContentChildren(forwardRef(() => KitButtonComponent)) buttons: QueryList<KitButtonComponent>;

  @Input() kitButtonGroup: any;

  @Input() multiple = false;

  @Input() selectable = false;

  private _direction: KitButtonGroupDirection = 'horizontal';

  constructor(private styler: StylerComponent,
              @Inject(kitButtonGroupStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-button-group';
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
          if (!button.selected && !this.multiple) {
            this.buttons.filter(b => b !== button).forEach(b => b.pushSelected(false));
          }
          // toggle button selection
          button.pushSelected(!button.selected);
        }
      });
    });
  }
}
