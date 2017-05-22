import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitLabelSize } from '../interfaces';
import { KitLabelService } from '../kit-label.service';

@Component({
  selector: 'kit-label',
  template: `
    {{ value }} 
  `,
})
export class KitLabelComponent implements OnInit {

  @Input() color: string = 'primary';
  @Input() size: KitLabelSize = 'm';
  @Input() value: number;

  @HostBinding('class') hostClass: string;

  constructor(private core: KitCoreService,
              private service: KitLabelService) {
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
//        this.core.mapColor(this.color, theme.host.swatchMap),
    );
  }

}
