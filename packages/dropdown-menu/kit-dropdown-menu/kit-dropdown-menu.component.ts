import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitDropdownMenuService } from '../kit-dropdown-menu.service';
import { KitPopoverComponent } from '@ngx-kit/popover';

/**
 * @todo implement sub-menus
 * @todo style popover
 * @todo add hover showing param
 */

@Component({
  selector: 'kit-dropdown-menu',
  template: `
    <kit-popover>
      <ng-content></ng-content>
    </kit-popover>
  `,
})
export class KitDropdownMenuComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  @ViewChild(KitPopoverComponent) popover: KitPopoverComponent;

  constructor(private core: KitCoreService,
              private service: KitDropdownMenuService) {
  }

  ngOnInit() {
    this.compileStyles();
    this.calcStyles();
  }

  calcStyles() {
    const theme = this.service.getTheme();
    this.hostClass = style(
        theme.host.base,
    );
  }

  toggle(event: any) {
    this.popover.toggle(event);
  }

  private compileStyles() {
  }

}
