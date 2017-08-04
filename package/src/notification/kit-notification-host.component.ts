import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Inject, Input, } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitCoreService } from '../core/kit-core.service';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentNotificationHost } from '../core/meta/tokens';
import { KitNotificationService } from './kit-notification.service';
import { KitNotificationItem } from './meta';

@Component({
  selector: 'kit-notification-host,[kitNotificationHost]',
  template: `
    <kit-overlay-container [type]="'fixedSide'"
                           [opened]="true"
                           [position]="overlayPosition">
      <div [styler]="['wrapper', {position: overlayPosition}]">
        <div *ngFor="let item of items" [@item]="overlayPosition" styler="item">
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
      state('top-right', style({
        transform: 'translateX(0)',
      })),
      state('bottom-right', style({
        transform: 'translateX(0)',
      })),
      state('bottom-left', style({
        transform: 'translateX(0)',
      })),
      state('top-left', style({
        transform: 'translateX(0)',
      })),
      // enter
      transition('void => top-right', [
        style({transform: 'translateX(100%)'}),
        animate('200ms cubic-bezier(0.4, 0.0, 1, 1)'),
      ]),
      transition('void => bottom-right', [
        style({transform: 'translateX(100%)'}),
        animate('200ms cubic-bezier(0.4, 0.0, 1, 1)'),
      ]),
      transition('void => bottom-left', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms cubic-bezier(0.4, 0.0, 1, 1)'),
      ]),
      transition('void => top-left', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms cubic-bezier(0.4, 0.0, 1, 1)'),
      ]),
      // leave
      transition('top-right => void', [
        animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateX(100%)'})),
      ]),
      transition('bottom-right => void', [
        animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateX(100%)'})),
      ]),
      transition('bottom-left => void', [
        animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateX(-100%)'})),
      ]),
      transition('top-left => void', [
        animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateX(-100%)'})),
      ]),
    ]),
  ],
})
export class KitNotificationHostComponent {
  readonly duration = 2000;

  items: KitNotificationItem[] = [];

  @Input() kitNotificationHost: any;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentNotificationHost) private style: KitComponentStyle,
              private core: KitCoreService,
              private notificationService: KitNotificationService) {
    this.styler.register(this.style);
  }

  get overlayPosition() {
    return this.notificationService.config.position;
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
