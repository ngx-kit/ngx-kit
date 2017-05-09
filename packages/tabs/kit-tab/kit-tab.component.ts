import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitTabsService } from '../kit-tabs.service';

@Component({
  selector: 'kit-tab',
  template: `
    <div *ngIf="active">
      <ng-content></ng-content>
    </div>
  `,
})
export class KitTabComponent implements OnInit {

  @Input() active: boolean;
  @Input() title: string;

  @HostBinding('class') hostClass: string;

  constructor(private core: KitCoreService,
              private service: KitTabsService) {
  }

  ngOnInit() {
    this.compileStyles();
    this.calcStyles();
  }

  private compileStyles() {
  }

  calcStyles() {
    const theme = this.service.getTheme();
//    this.hostClass = style(
//        theme.host.base,
//    );
  }

}
