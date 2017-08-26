import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { kitNotificationHostStyle } from '../core/meta/tokens';
import { uuid } from '../core/util/uuid';
import { KitNotificationService } from './kit-notification.service';
import { KitNotificationHostConfig, KitNotificationItem, KitNotificationMessage } from './meta';

@Component({
  selector: 'kit-notification-host,[kitNotificationHost]',
  template: `
    <kit-overlay-container [type]="'fixedSide'"
                           [opened]="true"
                           [position]="hostConfig.position">
      <div [styler]="['wrapper', {position: hostConfig.position}]">
        <div *ngFor="let item of items"
             [@item]="hostConfig.position"
             [styler]="['item', {color: item.message.color}]"
             (click)="close(item.__id)">
          <div *ngIf="item.message.title"
               [styler]="['itemTitle', {color: item.message.color}]">
            {{ item.message.title }}
          </div>
          <div [styler]="['itemMessage', {color: item.message.color}]">
            {{ item.message.message }}
          </div>
        </div>
      </div>
    </kit-overlay-container>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  hostConfig: KitNotificationHostConfig;

  items: KitNotificationItem[] = [];

  @Input() kitNotificationHost: any;

  constructor(private styler: StylerComponent,
              @Inject(kitNotificationHostStyle) private componentStyle: KitComponentStyle,
              private notificationService: KitNotificationService,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-notification-host';
    this.styler.register(this.componentStyle);
    this.handleConfig();
  }

  close(__id: string) {
    const index = this.items.findIndex(i => i.__id === __id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  handleConfig(): any {
    this.notificationService.config$.subscribe(config => {
      this.hostConfig = config;
    });
  }

  open(message: KitNotificationMessage) {
    const __id = uuid();
    this.items.push({
      __id,
      message,
    });
    this.cdr.markForCheck();
    setTimeout(() => {
      this.close(__id);
    }, message.duration || this.hostConfig.duration);
  }
}
