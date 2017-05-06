import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitNameService } from '../kit-name.service';

@Component({
  selector: 'kit-name',
  template: `
    {{ value }} 
  `,
})
export class KitNameComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  constructor(private core: KitCoreService,
              private service: KitNameService) {
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
