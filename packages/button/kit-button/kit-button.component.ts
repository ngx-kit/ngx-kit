import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { style } from 'typestyle';

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
  @Input() type: KitButtonType = 'default';
  @Input() disabled = false;

  @HostBinding('class') hostClass: string;

  constructor(private service: KitButtonService) {
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
        theme.host.type[this.type],
        this.disabled ? theme.host.disabled : null);
  }

}
