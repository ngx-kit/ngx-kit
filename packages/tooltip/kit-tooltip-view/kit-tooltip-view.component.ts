import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { style as s } from 'typestyle';

import { KitCoreService } from '@ngx-kit/core';

import { KitTooltipService } from '../kit-tooltip.service';

/**
 * @todo add right/bottom/left positions
 * @todo do not cross the edge
 * @todo add pointer
 */

@Component({
  selector: 'kit-tooltip-view',
  template: `
    <div [class]="css.wrapper">
      <span [class]="css.text">{{ text }}</span>
    </div>
  `,
})
export class KitTooltipViewComponent implements OnInit {

  hostRect: {top: number, right: number, bottom: number, left: number, width: number};
  text: string;
  top: number;
  left: number;

  css = {
    host: s({
      position: 'fixed',
      height: 0,
      width: 0,
    }),
    wrapper: s({
      position: 'absolute',
      bottom: 0,
      left: '-100px',
      width: '200px',
      textAlign: 'center',
      padding: 8,
    }),
    text: s({
      background: 'rgba(0,0,0,.5)',
      color: '#ffffff',
      borderRadius: '2px',
      padding: '4px 8px',
    }),
  };

  @HostBinding('class') hostClass = this.css.host;
  @HostBinding('style.top.px') styleTop: number;
  @HostBinding('style.left.px') styleLeft: number;

  constructor(private core: KitCoreService,
              private service: KitTooltipService) {
  }

  ngOnInit() {
    this.compileStyles();
    this.calcStyles();
    this.reposition();
  }

  calcStyles() {
    const theme = this.service.getTheme();
//    this.hostClass = s(
//        theme.host.base,
//    );
  }

  private compileStyles() {
  }

  private reposition() {
    this.styleTop = Math.round(this.hostRect.top);
    this.styleLeft = Math.round(this.hostRect.left + this.hostRect.width / 2);
  }

}
