import {
  Component,
  ContentChildren,
  forwardRef,
  Inject,
  Input,
  OnInit,
  Optional,
  QueryList,
  SkipSelf,
} from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import { KitComponentStyle } from '../core/meta/component';
import { kitMenuSubStyle } from '../core/meta/tokens';
import { KitMenuItemComponent } from './kit-menu-item.component';
import { KitMenuComponent } from './kit-menu.component';
import { KitMenuDirection } from './meta';

/**
 * @todo separator inside group
 */
@Component({
  selector: 'kit-menu-sub,[kitMenuSub]',
  template: `
    <kit-overlay [anchor]="anchor"
                 [opened]="opened"
                 [position]="overlayPosition"
                 [template]="contentRef"
                 [type]="'dropdown'"
                 [widthType]="'auto'"
                 (outsideClick)="close()"
                 (containerMouseEnter)="containerMouseEnter()"
                 (containerMouseLeave)="containerMouseLeave()"></kit-overlay>
    <ng-template #contentRef>
      <div [styler]="['menu', {position: overlayPosition}]">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitMenuSubComponent implements OnInit {
  @ContentChildren(forwardRef(() => KitMenuItemComponent), {descendants: false})
  items: QueryList<KitMenuItemComponent>;

  @Input() kitMenuSub: any;

  overlayPosition = 'bottom';

  private _hover = false;

  private _menuDirection: KitMenuDirection;

  private _opened = false;

  constructor(private styler: StylerComponent,
              @Inject(kitMenuSubStyle) private style: KitComponentStyle,
              @Inject(forwardRef(() => KitMenuComponent)) private menu: KitMenuComponent,
              @Inject(forwardRef(() => KitMenuItemComponent)) private parentItem: KitMenuItemComponent,
              @SkipSelf() @Optional() @Inject(forwardRef(() => KitMenuSubComponent))
              private parentSub: KitMenuSubComponent) {
    this.styler.classPrefix = 'kit-menu-sub';
    this.styler.register(this.style);
  }

  get anchor() {
    return this.parentItem.nativeEl;
  }

  get hover() {
    return this._hover || this.hasHoveredChildren();
  }

  @Input()
  set menuDirection(direction: KitMenuDirection) {
    this._menuDirection = direction;
    this.overlayPosition = this._menuDirection === 'horizontal' && !this.parentSub ? 'bottom' : 'right';
  }

  get opened() {
    return this._opened;
  }

  ngOnInit() {
    this._menuDirection = this.parentSub ? 'vertical' : 'horizontal';
  }

  close() {
    this._opened = false;
  }

  containerMouseEnter() {
    this._hover = true;
  }

  containerMouseLeave() {
    this._hover = false;
    this.menu.checkLeave$.next();
  }

  hasHoveredChildren(): boolean {
    if (this.items) {
      return this.items.some(item => item.hover);
    } else {
      return false;
    }
  }

  open() {
    this._opened = true;
  }
}
