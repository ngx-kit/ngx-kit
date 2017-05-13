import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitDropdownMenuService } from '../kit-dropdown-menu.service';

@Component({
  selector: 'kit-dropdown-menu-item',
  template: `
    <ng-content></ng-content>
  `,
})
export class KitDropdownMenuItemComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  constructor(private core: KitCoreService,
              private service: KitDropdownMenuService) {
  }

  ngOnInit() {
    this.compileStyles();
    this.calcStyles();
  }

  private compileStyles() {
  }

  calcStyles() {
    const theme = this.service.getTheme();
    this.hostClass = style(
        theme.item.base,
    );
  }

}
