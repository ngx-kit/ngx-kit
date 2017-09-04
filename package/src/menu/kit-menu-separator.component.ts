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
import { kitMenuSeparatorStyle } from '../core/meta/tokens';
import { KitMenuComponent } from './kit-menu.component';

@Component({
  selector: 'kit-menu-separator,[kitMenuSeparator]',
  template: `
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitMenuSeparatorComponent implements OnInit, AfterContentInit {
  @Input() kitMenuSeparator: null;

  constructor(private styler: StylerComponent,
              @Inject(kitMenuSeparatorStyle) private style: KitComponentStyle,
              @Inject(forwardRef(() => KitMenuComponent)) private menu: KitMenuComponent) {
    this.styler.classPrefix = 'kit-menu-separator';
    this.styler.register(this.style);
  }

  ngAfterContentInit() {
    this.applyMenuState();
  }

  ngOnInit() {
    this.menu.changes$.subscribe(() => {
      this.applyMenuState();
    });
  }

  private applyMenuState() {
    this.styler.host.applyState({
      inverted: this.menu.inverted,
      parentDirection: this.menu.direction,
    });
  }
}
