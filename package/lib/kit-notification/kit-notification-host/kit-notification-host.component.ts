import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit, } from '@angular/core';
import { KitCoreOverlayContainerPositionCorner, KitNotificationItem, KitNotificationService, } from '@ngx-kit/ngx-kit';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'kit-notification-host,[kitNotificationHost]',
  template: `
    <div class="wrapper" [kitClass]="{position: position$ | async}">
      <div *ngFor="let item of items$ | async"
           (click)="close(item.__id)"
           [@item]="position$ | async"
           class="item">
        <h3 *ngIf="item.params.title" class="title">{{ item.params.title }}</h3>
        <div class="message">{{ item.params.message }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./kit-notification-host.component.scss'],
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
export class KitNotificationHostComponent implements OnInit {
  items$: Observable<KitNotificationItem[]>;

  @Input() kitNotificationHost: null;

  position$: Observable<KitCoreOverlayContainerPositionCorner>;

  constructor(private notificationService: KitNotificationService) {
  }

  ngOnInit() {
    this.position$ = this.notificationService.config$.map(c => c.position);
    this.items$ = this.notificationService.items$;
  }

  close(__id: string) {
    this.notificationService.close(__id);
  }
}
