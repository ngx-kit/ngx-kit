import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UiNotificationItem, UiNotificationPosition } from '../meta';
import { UiNotificationService } from '../ui-notification.service';

@Component({
  selector: 'ui-notification-host',
  templateUrl: './ui-notification-host.component.html',
  styleUrls: ['./ui-notification-host.component.scss'],
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
export class UiNotificationHostComponent implements OnInit {
  items: Observable<UiNotificationItem[]>;

  position: Observable<UiNotificationPosition>;

  constructor(private notification: UiNotificationService) {
  }

  ngOnInit() {
    this.position = this.notification.configChanges.pipe(map(c => c.position));
    this.items = this.notification.itemsChanges;
  }

  close(__id: string) {
    this.notification.close(__id);
  }
}
