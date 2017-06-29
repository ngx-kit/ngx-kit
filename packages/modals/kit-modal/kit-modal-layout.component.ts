import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kit-modal-layout',
  template: `
    <div [class]="css.overlay" [@overlay]="'default'" (click)="overlay.emit()"></div>
    <div [class]="css.body" [@body]="'default'">
      <div [class]="css.header">
        <ng-content select="[header]"></ng-content>
      </div>
      <div [class]="css.content">
        <ng-content select="[content]"></ng-content>
      </div>
      <div [class]="css.footer">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  `,
  animations: [
    trigger('overlay', [
      state('default', style({
        opacity: 1,
      })),
      transition('void => default', [
        animate(150, keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, offset: 1.0}),
        ])),
      ]),
    ]),
    trigger('body', [
      state('default', style({
        opacity: 1,
        transform: 'translateY(0)',
      })),
      transition('void => default', [
        animate(250, keyframes([
          style({opacity: 0, transform: 'translateY(+15px)', offset: 0}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
        ])),
      ]),
    ]),
  ],
})
export class KitModalLayoutComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();

  @Input() header: string;

  @Output() overlay: EventEmitter<any> = new EventEmitter<any>();

//  css = {
//    host: s({
//      alignItems: 'center',
//      bottom: 0,
//      display: 'flex',
//      flexDirection: 'column',
//      justifyContent: 'center',
//      left: 0,
//      position: 'fixed',
//      right: 0,
//      top: 0,
//    }),
//    overlay: s({
//      background: 'rgba(0, 0, 0, .4)',
//      bottom: 0,
//      left: 0,
//      position: 'absolute',
//      right: 0,
//      top: 0,
//      zIndex: 99998,
//    }),
//    body: s({
//      background: '#ffffff',
//      borderRadius: '4px',
//      boxShadow: '0 10px 70px rgba(0, 0, 0, .4)',
//      color: '#444444',
//      zIndex: 99999,
//    }),
//    header: s({
//      padding: '16px 32px',
//      fontSize: '1.6rem',
//      fontWeight: 600,
//      borderBottom: '1px solid #e0e0e0',
//      borderRadius: '4px 4px 0 0',
//    }),
//    content: s({
//      padding: '16px 32px 32px',
//    }),
//    footer: s({
//      background: 'aliceblue',
//      borderRadius: '0 0 4px 4px',
//      borderTop: '1px solid #e0e0e0',
//      padding: '16px 32px',
//      textAlign: 'right',
//    })
//  };
//  @HostBinding('class') hostClass = this.css.host;
  constructor() {
  }

  ngOnInit() {
  }

  raiseClose() {
    this.close.next(true);
  }
}