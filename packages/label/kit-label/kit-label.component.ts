import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kit-label',
  template: `
    {{ value }}
  `,
})
export class KitLabelComponent implements OnInit {

  @Input() color: string = 'primary';
  @Input() size: string = 'm';
  @Input() value: number;

  @HostBinding('class') hostClass: string;

  constructor() {
  }

  ngOnInit() {
  }

//  this.theme = {
//  host: {
//    base: {
//      borderRadius: '.33rem',
//      display: 'inline-block',
//      fontWeight: 'normal',
//      lineHeight: 1,
//      minWidth: '1px',
//      textAlign: 'center',
//    },
//    size: {
//      s: {
//        padding: '2px 4px',
//        fontSize: '.8rem',
//      },
//      m: {
//        padding: '2px 6px',
//        fontSize: '.9rem',
//      },
//      l: {
//        padding: '4px 8px',
//        fontSize: '1.1rem',
//      },
//    },
//    swatchMap: {
//      background: 'color',
//      color: 'text',
//    },
//  }
//};

}
