import { Component, HostBinding, Input, OnInit } from '@angular/core';

/**
 * @todo add and implement position param
 * @todo handle window edges
 * @todo handle outside click closing
 * @todo handle popup click closing
 */
@Component({
  selector: 'kit-popover,[kitPopover]',
  template: `
    <ng-content></ng-content>
  `,
})
export class KitPopoverComponent implements OnInit {
  @HostBinding('class') hostClass: string;

  @Input() kitPopover: any;

  @HostBinding('style.display') styleDisplay: string;

  @HostBinding('style.left.px') styleLeft: number;

  @HostBinding('style.top.px') styleTop: number;

  private _display: boolean;

  constructor() {
  }

  get display(): boolean {
    return this._display;
  }

  set display(display: boolean) {
    this._display = display;
    this.styleDisplay = this._display ? 'block' : 'none';
  }

  ngOnInit() {
    this.display = false;
  }

  toggle(event: any) {
    this.display = !this.display;
    if (event.target) {
      this.calcPosition(event.target);
    } else {
      throw new Error('You need to pass $event to toggle method');
    }
  }

  private calcPosition(target: Element) {
    console.log('rect', target.getBoundingClientRect());
    const hostRect = target.getBoundingClientRect();
    this.styleLeft = hostRect.left;
    this.styleTop = hostRect.bottom;
//    const position = target.
  }

//  this.theme = {
//  host: {
//    base: {
//      position: 'fixed',
//      padding: 8,
//      border: '1px solid #eeeeee',
//      background: '#ffffff',
//    },
//  }
//};
}
