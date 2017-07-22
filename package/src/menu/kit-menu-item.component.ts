import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  Optional,
  QueryList,
} from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentMenuItem } from '../core/meta/tokens';
import { KitMenuSubComponent } from './kit-menu-sub.component';
import { KitMenuComponent } from './kit-menu.component';

@Component({
  selector: 'kit-menu-item,[kit-menu-item],[kitMenuItem]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitMenuItemComponent implements OnInit, AfterContentInit {
  @ContentChildren(forwardRef(() => KitMenuItemComponent), {descendants: true}) items: QueryList<KitMenuItemComponent>;

  @Input() kitMenuItem: any;

  @ContentChildren(forwardRef(() => KitMenuSubComponent), {descendants: false}) subs: QueryList<KitMenuSubComponent>;

  private _hover = false;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentMenuItem) private style: KitComponentStyle,
              @Inject(forwardRef(() => KitMenuComponent)) private menu: KitMenuComponent,
              @Inject(forwardRef(() => KitMenuSubComponent)) @Optional() private sub: KitMenuSubComponent,
              private el: ElementRef) {
    this.styler.register(this.style);
  }

  @Input()
  set disabled(disabled: boolean) {
    this.styler.host.applyState({disabled});
  }

  get hover() {
    return this._hover || this.hasHoveredChildren();
  }

  get nativeEl() {
    return this.el.nativeElement;
  }

  ngAfterContentInit() {
    // apply styler states
    this.styler.host.applyState({
      menuDirection: this.menu.direction,
      root: !this.sub,
      hasSubs: this.subs && this.subs.length > 0,
    });
  }

  ngOnInit() {
    // hover handler
    this.menu.checkLeave$
        .debounceTime(200)
        .subscribe(() => {
          if (!this.hover) {
            this.styler.host.applyState({hover: false});
            this.closeSub();
          }
        });
//    this.mouseLeave$
//        .debounceTime(200)
//        .filter(() => !this.hover)
//        .subscribe(() => this.closeSub());
  }

  hasHoveredChildren(): boolean {
    if (this.subs && this.subs.first) {
      return this.subs.first.hover;
    } else {
      return false;
    }
  }

  @HostListener('mouseenter')
  mouseenter() {
    this._hover = true;
    this.styler.host.applyState({hover: true});
    this.openSub();
  }

  @HostListener('mouseleave')
  mouseleave() {
    this._hover = false;
    this.menu.checkLeave$.next();
  }

  private closeSub() {
    if (this.subs && this.subs.first) {
      this.subs.first.close();
    }
  }

  private openSub() {
    if (this.subs && this.subs.first) {
      this.subs.first.open();
    }
  }
}
