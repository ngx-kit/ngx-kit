import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitMenuSeparatorStyle } from '../core/meta/tokens';
import { KitMenuDirection } from './meta';

@Component({
  selector: 'kit-menu-separator,[kitMenuSeparator]',
  template: `
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitMenuSeparatorComponent implements OnInit {
  @Input() kitMenuSeparator: any;

  private _parentDirection: KitMenuDirection = 'vertical';

  constructor(private styler: StylerComponent,
              @Inject(kitMenuSeparatorStyle) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-menu-separator';
    this.styler.register(this.style);
  }

  @Input()
  set parentDirection(parentDirection: KitMenuDirection) {
    this._parentDirection = parentDirection;
    this.styler.host.applyState({parentDirection});
  }

  ngOnInit() {
  }
}
