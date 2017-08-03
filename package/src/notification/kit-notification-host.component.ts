import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Inject, Input, } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitCoreService } from '../core/kit-core.service';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentNotificationHost } from '../core/meta/tokens';
import { KitNotificationItem } from './meta';

@Component({
  selector: 'kit-notification-host,[kitNotificationHost]',
  template: `
    <kit-overlay-container [type]="'fixedSide'"
                           [opened]="true"
                           [position]="'top-right'">
      <div styler="wrapper">
        <div *ngFor="let item of items" [@item]="itemTrigger" styler="item">
          <div *ngIf="item.title" styler="itemTitle">{{ item.title }}</div>
          <div styler="itemMessage">{{ item.message }}</div>
        </div>
      </div>
    </kit-overlay-container>
  `,
  viewProviders: [
    StylerComponent,
  ],
  animations: [
    trigger('item', [
      state('in', style({
        transform: 'translateX(0)',
      })),
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('200ms cubic-bezier(0.4, 0.0, 1, 1)'),
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateX(100%)'})),
      ]),
    ]),
  ],
})
export class KitNotificationHostComponent {
  readonly duration = 2000;

  itemTrigger = 'in';

  items: KitNotificationItem[] = [];

  @Input() kitNotificationHost: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentNotificationHost) private style: KitComponentStyle,
              private core: KitCoreService) {
    this.styler.register(this.style);
  }

  close(__id: string) {
    const index = this.items.findIndex(i => i.__id === __id);
    this.items.splice(index, 1);
  }

  open(message: string, title?: string) {
    const __id = this.core.uuid();
    this.items.push({
      __id,
      title: title || '',
      message,
    });
    setTimeout(() => {
      this.close(__id);
    }, this.duration);
  }
}
