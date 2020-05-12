import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EvoNotificationItem, EvoNotification } from '@ngx-kit/evo/notification';
import { from, Observable } from 'rxjs';
import { LiteNotificationItemParams, LiteNotificationPosition } from '../meta';

@Component({
  selector: 'lite-notification-host',
  templateUrl: './lite-notification-host.component.html',
  styleUrls: ['./lite-notification-host.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('item', [
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
export class LiteNotificationHostComponent implements OnInit {
  items: Observable<EvoNotificationItem<LiteNotificationItemParams>[]>;

  position: Observable<LiteNotificationPosition>;

  constructor(private notification: EvoNotification<LiteNotificationItemParams>) {
  }

  ngOnInit() {
//    this.position = this.notification.configChanges.pipe(map(c => c.position));
    this.position = from(['top-right' as LiteNotificationPosition]);
    this.items = this.notification.itemsChanges;
  }

  close(__id: string) {
    this.notification.close(__id);
  }
}
