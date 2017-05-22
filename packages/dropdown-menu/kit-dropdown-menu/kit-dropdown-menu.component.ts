import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

  toggle(event: any) {
    this.popover.toggle(event);
  }

//  this.theme = {
//  host: {
//    base: {
//    },
//  },
//  item: {
//    base: {
//      display: 'block',
//      borderBottom: '1px solid #eeeeee',
//      $nest: {
//        '&:last-child': {
//          borderBottom: 0,
//        },
//      },
//    },
//  },
//};

}
