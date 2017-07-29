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
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentMenu } from '../core/meta/tokens';
import { KitMenuSeparatorComponent } from './kit-menu-separator.component';
import { KitMenuSubComponent } from './kit-menu-sub.component';
import { KitMenuDirection } from './meta';

@Component({
  selector: 'kit-menu,[kitMenu]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitMenuComponent implements OnInit, AfterContentInit {
  checkLeave$ = new Subject<any>();

  @Input() kitMenu: any;

  @ContentChildren(forwardRef(() => KitMenuSeparatorComponent), {descendants: false})
  separators: QueryList<KitMenuSeparatorComponent>;

  @ContentChildren(forwardRef(() => KitMenuSubComponent), {descendants: true}) subs: QueryList<KitMenuSubComponent>;

  private _direction: KitMenuDirection = 'horizontal';

  constructor(private styler: StylerComponent,
              @Inject(kitComponentMenu) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  get direction() {
    return this._direction;
  }

  @Input()
  set direction(direction: KitMenuDirection) {
    this._direction = direction;
    this.styler.host.applyState({direction});
    this.proxyDirectionToSubs();
    this.proxyDirectionToSeparators();
  }

  ngAfterContentInit() {
    this.proxyDirectionToSubs();
    this.proxyDirectionToSeparators();
  }

  ngOnInit() {
  }

  private proxyDirectionToSeparators() {
    if (this.separators) {
      this.separators.forEach(separator => {
        separator.parentDirection = this._direction;
      });
    }
  }

  private proxyDirectionToSubs() {
    if (this.subs) {
      this.subs.forEach(sub => {
        sub.menuDirection = this._direction;
      });
    }
  }
}
