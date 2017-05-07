import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitGridService } from '../kit-grid.service';

@Component({
  selector: 'kit-grid',
  template: `
    grid
  `,
})
export class KitGridComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  constructor(private core: KitCoreService,
              private service: KitGridService) {
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
        theme.host.base,
    );
  }

}
