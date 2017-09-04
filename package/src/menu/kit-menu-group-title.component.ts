import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Inject,
  Input,
  OnInit,
} from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitMenuGroupTitleStyle } from '../core/meta/tokens';
import { KitMenuComponent } from './kit-menu.component';

@Component({
  selector: 'kit-menu-group-title,[kitMenuGroupTitle]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitMenuGroupTitleComponent implements OnInit, AfterContentInit {
  @Input() kitMenuGroupTitle: null;

  constructor(private styler: StylerComponent,
              @Inject(kitMenuGroupTitleStyle) private style: KitComponentStyle,
              @Inject(forwardRef(() => KitMenuComponent)) private menu: KitMenuComponent) {
    this.styler.classPrefix = 'kit-menu-group-title';
    this.styler.register(this.style);
  }

  ngAfterContentInit() {
    this.styler.host.applyState({
      inverted: this.menu.inverted,
    });
  }

  ngOnInit() {
  }
}
