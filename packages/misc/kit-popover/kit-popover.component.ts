import { Component, HostBinding, OnInit } from '@angular/core';

/**
 * @todo add and implement position param
 * @todo handle window edges
 * @todo handle outside click closing
 * @todo handle popup click closing
 */

@Component({
  selector: 'kit-popover',
  template: `
    <ng-content></ng-content>
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

  constructor() {
  }

  ngOnInit() {
    this.display = false;
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

  private calcPosition(target: Element) {
    console.log('rect', target.getBoundingClientRect());
    const hostRect = target.getBoundingClientRect();
    this.styleLeft = hostRect.left;
    this.styleTop =  hostRect.bottom;
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
