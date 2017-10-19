import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {
  KitAnchorDirective,
  KitFocusManagerService,
  KitOverlayPositionService,
  KitStyleService,
} from '@ngx-kit/ngx-kit';

@Component({
  selector: 'ui-date-picker-popup',
  templateUrl: './ui-date-picker-popup.component.html',
  styleUrls: ['./ui-date-picker-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitOverlayPositionService,
    KitStyleService,
    KitFocusManagerService,
  ],
  animations: [
    trigger('host', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-5px)',
        }),
        animate('100ms', style({
          opacity: 1,
          transform: 'translateY(0)',
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('100ms', style({
          opacity: 0,
          transform: 'translateY(-5px)',
        })),
      ]),
    ]),
  ],
})
export class UiDatePickerPopupComponent implements OnInit, OnChanges {
  @Input() anchor: KitAnchorDirective;

  @HostBinding('attr.aria-describedby') describedby = 'Popup where you can pick a date';

  @HostBinding('@host') hostTrigger;

  @HostBinding('attr.aria-labelledby') labelledby = 'Datepicker popup';

  @Output() outsideClick = new EventEmitter<MouseEvent>();

  @HostBinding('attr.role') role = 'dialog';

  constructor(private overlayPosition: KitOverlayPositionService,
              private focusManager: KitFocusManagerService) {
    this.focusManager.autoCapture = true;
    this.focusManager.init();
  }

  ngOnChanges() {
    this.overlayPosition.anchor = this.anchor;
    this.overlayPosition.reposition();
  }

  ngOnInit() {
    this.overlayPosition.type = 'dropdown';
    this.overlayPosition.position = 'bottom';
    this.overlayPosition.reposition();
    this.overlayPosition.outsideClick$.subscribe(this.outsideClick);
    this.focusManager.focusItem('grid');
  }
}
