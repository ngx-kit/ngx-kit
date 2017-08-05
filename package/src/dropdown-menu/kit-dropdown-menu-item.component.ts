import { Component, HostListener, Inject, Input, OnInit, Optional } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitDropdownMenuComponent } from './kit-dropdown-menu.component';
import { kitComponentDropdownMenuItem } from '../core/meta/tokens';
import { KitComponentStyle } from '../core/meta/component';

@Component({
  selector: 'kit-dropdown-menu-item,[kitDropdownMenuItem]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitDropdownMenuItemComponent implements OnInit {
  @Input() kitDropdownMenuItem: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentDropdownMenuItem) private style: KitComponentStyle,
              @Optional() private menu: KitDropdownMenuComponent) {
    this.styler.classPrefix = 'kit-dropdown-menu-item';
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

  @HostListener('click')
  click(event: MouseEvent) {
    this.menu.itemClick.emit(event);
    this.menu.close();
  }
}
