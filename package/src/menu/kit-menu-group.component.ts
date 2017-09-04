import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitMenuGroupStyle } from '../core/meta/tokens';

@Component({
  selector: 'kit-menu-group,[kitMenuGroup]',
  template: `
    <ng-content select="kit-menu-group-title,[kitMenuGroupTitle]"></ng-content>
    <div styler="items">
      <ng-content></ng-content>
    </div>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitMenuGroupComponent implements OnInit {
  @Input() kitMenuGroup: null;

  constructor(private styler: StylerComponent,
              @Inject(kitMenuGroupStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-menu-group';
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
