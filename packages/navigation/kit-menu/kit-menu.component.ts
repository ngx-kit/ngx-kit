import {
  AfterContentInit,
  Component, ContentChildren, forwardRef, HostBinding, Inject, Input, OnInit, QueryList,
} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentMenu, KitComponentStyle } from '@ngx-kit/core';

import { KitMenuDirection } from '../interfaces';
import { KitMenuSubComponent } from './kit-menu-sub.component';
import { KitMenuSeparatorComponent } from './kit-menu-separator.component';

@Component({
  selector: 'kit-menu',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitMenuComponent implements OnInit, AfterContentInit {

  @Input() set direction(direction: KitMenuDirection) {
    this._direction = direction;
    this.styler.host.applyState({direction});
    this.proxyDirectionToSubs();
    this.proxyDirectionToSeparators();
  }

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  @ContentChildren(forwardRef(() => KitMenuSubComponent), {descendants: true}) subs: QueryList<KitMenuSubComponent>;
  @ContentChildren(forwardRef(() => KitMenuSeparatorComponent), {descendants: false})
  separators: QueryList<KitMenuSeparatorComponent>;

  checkLeave$ = new Subject<any>();

  private _direction: KitMenuDirection = 'horizontal';

  constructor(private styler: StylerComponent,
              @Inject(kitComponentMenu) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.proxyDirectionToSubs();
    this.proxyDirectionToSeparators();
  }

  private proxyDirectionToSubs() {
    if (this.subs) {
      this.subs.forEach(sub => {
        sub.menuDirection = this._direction;
      });
    }
  }

  private proxyDirectionToSeparators() {
    if (this.separators) {
      this.separators.forEach(separator => {
        separator.parentDirection = this._direction;
      });
    }
  }

}
