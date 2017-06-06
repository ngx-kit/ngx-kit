import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';

import { KitDropdownMenuComponent } from '../kit-dropdown-menu/kit-dropdown-menu.component';

@Component({
  selector: 'kit-dropdown-menu-dynamic',
  template: `
    <kit-dropdown-menu>
      <kit-dropdown-menu-item *ngFor="let item of items">{{ item }}</kit-dropdown-menu-item>
    </kit-dropdown-menu>
  `,
})
export class KitDropdownMenuDynamicComponent implements OnInit {

  @Input() items: string[];

  @HostBinding('class') hostClass: string;

  @ViewChild(KitDropdownMenuComponent) dropdown: KitDropdownMenuComponent;

  constructor() {
  }

  ngOnInit() {
  }

  toggle(event: any) {
    this.dropdown.toggle(event);
  }

}
