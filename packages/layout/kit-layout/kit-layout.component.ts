import {
  AfterContentInit, Component, ContentChildren, HostBinding, Inject, OnInit, QueryList,
} from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';
import { kitComponentLayout, KitComponentStyle } from '@ngx-kit/core';

import { KitLayoutSideComponent } from './kit-layout-side.component';

@Component({
  selector: 'kit-layout',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitLayoutComponent implements OnInit, AfterContentInit {

  @ContentChildren(KitLayoutSideComponent, {descendants: false}) sides: QueryList<KitLayoutSideComponent>;

  @HostBinding('attr.sid') get sid() {
    return this.styler.host.sid;
  };

  constructor(private styler: StylerComponent,
              @Inject(kitComponentLayout) private style: KitComponentStyle) {
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.sides.length > 0) {
      console.log('side', this.sides);
      this.styler.host.applyState({hasSide: true});
    }
  }

}
