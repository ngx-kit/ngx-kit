import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { style } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitPopoverService } from '../kit-popover.service';

/**
 * @todo add and implement position param
 * @todo handle outside click closing
 * @todo handle popup click closing
 */

@Component({
  selector: 'kit-popover',
  template: `
    popover
  `,
})
export class KitPopoverComponent implements OnInit {

  @HostBinding('class') hostClass: string;
  @HostBinding('style.display') styleDisplay: string;
  @HostBinding('style.top.px') styleTop: number;
  @HostBinding('style.left.px') styleLeft: number;

  set display(display: boolean) {
    this._display = display;
    this.styleDisplay = this._display ? 'block' : 'none';
  }

  get display(): boolean {
    return this._display;
  }

  private _display: boolean;

  constructor(private core: KitCoreService,
              private service: KitPopoverService) {
  }

  ngOnInit() {
    this.compileStyles();
    this.calcStyles();
    this.display = false;
  }

  calcStyles() {
    const theme = this.service.getTheme();
    this.hostClass = style(
        theme.host.base,
    );
  }

  toggle(event: any) {
    this.display = !this.display;
    console.log('ev', event);
    if (event.target) {
      this.calcPosition(event.target);
    } else {
      throw new Error('You need to pass $event to toggle method');
    }
  }

  private compileStyles() {
  }

  private calcPosition(target: Element) {
    console.log('rect', target.getBoundingClientRect());
    const hostRect = target.getBoundingClientRect();
    this.styleLeft = hostRect.left;
    this.styleTop =  hostRect.bottom;
//    const position = target.
  }

}
