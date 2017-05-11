import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { style as s } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitDividerService } from '../kit-divider.service';

/**
 * @todo add vertical setting
 */

@Component({
  selector: 'kit-divider',
  template: `
    <div [class]="lineClass"></div>
    <div [class]="textClass"><ng-content></ng-content></div>
    <div [class]="lineClass"></div>
  `,
})
export class KitDividerComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  lineClass: string;
  textClass: string;

  constructor(private core: KitCoreService,
              private service: KitDividerService) {
  }

  ngOnInit() {
    this.compileStyles();
    this.calcStyles();
  }

  private compileStyles() {
  }

  calcStyles() {
    const theme = this.service.getTheme();
    this.hostClass = s(theme.host.base);
    this.lineClass = s(theme.line.base);
    this.textClass = s(theme.text.base);
  }

}
