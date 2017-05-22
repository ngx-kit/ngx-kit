import { Component, HostBinding, OnInit } from '@angular/core';

/**
 * @todo add vertical setting
 */

@Component({
  selector: 'kit-divider',
  template: `
    <div [class]="lineClass"></div>
    <div [class]="textClass"><ng-content></ng-content></div>
    <div [class]="lineClass"></div>
  `,
})
export class KitDividerComponent implements OnInit {

  @HostBinding('class') hostClass: string;

  lineClass: string;
  textClass: string;

  constructor() {
  }

  ngOnInit() {
  }

//  this.theme = {
//  host: {
//    base: {
//      display: 'flex',
//      flexDirection: 'row',
//      alignItems: 'center',
//      padding: '16px 0',
//    },
//  },
//  line: {
//    base: {
//      flexGrow: 1,
//      borderTop: '1px solid rgba(34,36,38,.15)',
//      borderBottom: '1px solid rgba(255,255,255,.1)',
//    }
//  },
//  text: {
//    base: {
//      $nest: {
//        '&:not(:empty)': {
//          padding: '0 16px',
//        },
//      },
//    },
//  },
//};

}
