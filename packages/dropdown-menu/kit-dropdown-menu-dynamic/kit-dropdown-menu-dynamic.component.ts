import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitDropdownMenuService } from '../kit-dropdown-menu.service';
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
    this.dropdown.toggle(event);
  }

  private compileStyles() {
  }

}
