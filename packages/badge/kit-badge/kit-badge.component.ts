import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { style } from 'typestyle';

import { KitBadgeSize, KitBadgeType } from '../interfaces';
import { KitBadgeService } from '../kit-badge.service';

@Component({
  selector: 'kit-badge',
  template: `
    {{ value }} 
  `,
})
export class KitBadgeComponent implements OnInit {

  @Input() size: KitBadgeSize = 'm';
  @Input() type: KitBadgeType = 'default';
  @Input() value: number;

  @HostBinding('class') hostClass: string;

  constructor(private service: KitBadgeService) {
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
        theme.host.size[this.size],
        theme.host.type[this.type]);
  }

}
