import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitBadgeSize } from '../interfaces';
import { KitBadgeService } from '../kit-badge.service';

@Component({
  selector: 'kit-badge',
  template: `
    {{ value }} 
  `,
})
export class KitBadgeComponent implements OnInit {

  @Input() color: string = 'primary';
  @Input() size: KitBadgeSize = 'm';
  @Input() value: number;

  @HostBinding('class') hostClass: string;

  constructor(private core: KitCoreService,
              private service: KitBadgeService) {
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
        this.core.mapColor(this.color, theme.host.swatchMap),
    );
  }

}
