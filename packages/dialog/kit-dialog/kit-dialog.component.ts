import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitDialogService } from '../kit-dialog.service';

@Component({
  selector: 'kit-dialog',
  template: `
    modal
  `,
})
export class KitDialogComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  constructor(private core: KitCoreService,
              private service: KitDialogService) {
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
