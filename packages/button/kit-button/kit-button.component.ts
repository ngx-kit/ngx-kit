import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitButtonService } from '../kit-button.service';
import { KitButtonSize, KitButtonType } from '../interfaces';

@Component({
  selector: 'kit-button',
  template: `
    <ng-content></ng-content>
  `,
})
export class KitButtonComponent implements OnInit {

  @Input() size: KitButtonSize = 'm';
  @Input() type: KitButtonType = 'primary';
  @Input() disabled = false;

  @HostBinding('class') hostClass: string;

  constructor(private core: KitCoreService,
              private service: KitButtonService) {
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
        this.core.mapColor(this.type, theme.host.swatchMap),
        theme.host.type[this.type],
        this.disabled ? this.core.mapColor('disabled', theme.host.swatchMap) : null,
        this.disabled ? theme.host.disabled : null);
  }

}
