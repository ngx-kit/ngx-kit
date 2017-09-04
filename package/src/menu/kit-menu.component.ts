import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  Inject,
  Input,
  OnChanges,
  OnInit,
  QueryList,
} from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { kitMenuStyle } from '../core/meta/tokens';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitMenuComponent implements OnInit, OnChanges, AfterContentInit {
  changes$ = new Subject<null>();

  checkLeave$ = new Subject<any>();

  @Input() inverted = false;

  @Input() kitMenu: null;

  @ContentChildren(forwardRef(() => KitMenuSeparatorComponent), {descendants: false})
  separators: QueryList<KitMenuSeparatorComponent>;

  @ContentChildren(forwardRef(() => KitMenuSubComponent), {descendants: true}) subs: QueryList<KitMenuSubComponent>;

  private _direction: KitMenuDirection = 'horizontal';

  constructor(private styler: StylerComponent,
              @Inject(kitMenuStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-menu';
    this.styler.register(this.style);
  }

  get direction() {
    return this._direction;
  }

  @Input()
  set direction(direction: KitMenuDirection) {
    this._direction = direction;
    this.styler.host.applyState({direction});
  }

  ngAfterContentInit() {
  }

  ngOnChanges() {
    this.changes$.next();
  }

  ngOnInit() {
  }
}
