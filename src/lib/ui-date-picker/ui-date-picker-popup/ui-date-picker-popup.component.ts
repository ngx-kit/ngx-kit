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
import { KitAnchorDirective, KitOverlayPositionService, KitStyleService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'ui-date-picker-popup',
  templateUrl: './ui-date-picker-popup.component.html',
  styleUrls: ['./ui-date-picker-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitOverlayPositionService,
    KitStyleService,
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

  @HostBinding('@host') hostTrigger;

  @Output() outsideClick = new EventEmitter<MouseEvent>();

  constructor(private overlayPosition: KitOverlayPositionService) {
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
  }
}
