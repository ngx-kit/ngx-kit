import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'kit-dropdown-menu-item',
  template: `
    <ng-content></ng-content>
  `,
})
export class KitDropdownMenuItemComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
