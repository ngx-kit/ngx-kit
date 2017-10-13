import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';

/**
 * @todo check animateChild on :leave
 */
@Component({
  selector: '<%= dasherize(name) %>',
  template: `
    <div class="fade" [@fade] (click)="fadeClick()"></div>
    <div class="modal" [@modal]>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':leave', [
        query('@*', animateChild()),
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        style({opacity: 0}),
        animate('250ms', style({opacity: 1})),
      ]),
      transition('* => void', [
        style({opacity: 1}),
        animate('250ms', style({opacity: 0})),
      ]),
    ]),
    trigger('modal', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-50%)',
        }),
        animate('250ms', style({
          opacity: 1,
          transform: 'translateY(0)',
        })),
      ]),
      transition('* => void', [
        style({opacity: 1}),
        animate('250ms', style({
          opacity: 0,
          transform: 'translateY(-50%)',
        })),
      ]),
    ]),
  ],
})
export class <%= classify(name) %>Component {
  @Output() close = new EventEmitter<void>();

  @HostBinding('@host') hostAnimation = true;

    fadeClick() {
    this.close.emit();
  }
}
