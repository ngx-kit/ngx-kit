import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, OnInit } from '@angular/core';
import { KitAnchor, KitFocusManagerService, KitOutsideClickService, KitOverlayToggleDirective } from '@ngx-kit/core';

@Component({
  selector: 'ui-date-picker-popup',
  templateUrl: './ui-date-picker-popup.component.html',
  styleUrls: ['./ui-date-picker-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitFocusManagerService,
    KitOutsideClickService,
  ],
  animations: [
    trigger('host', [
      transition(':enter, :leave', [
        query('@*', animateChild()),
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.5)',
        }),
        animate('150ms ease-out', style({
          opacity: 1,
          transform: 'scale(1)',
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('150ms ease-in', style({
          opacity: 0,
          transform: 'scale(0.5)',
        })),
      ]),
    ]),
  ],
})
export class UiDatePickerPopupComponent implements OnInit, OnChanges {
  @Input() anchor: KitAnchor | HTMLElement;

  @Input() toggle: KitOverlayToggleDirective;

  @HostBinding('attr.aria-label') ariaLabel = 'Datepicker popup';

  @HostBinding('attr.aria-modal') ariaModal = true;

  @HostBinding('@host') hostTrigger = true;

  @HostBinding('attr.role') role = 'dialog';

  constructor(
    private focusManager: KitFocusManagerService,
    private outsideClick: KitOutsideClickService,
  ) {
    this.focusManager.autoCapture = true;
    this.focusManager.init();
  }

  ngOnChanges() {
    this.outsideClick.skip = [this.toggle.nativeEl];
  }

  ngOnInit() {
    this.focusManager.focusItem('grid');
    this.outsideClick.outsideClick.subscribe(e => {
      this.toggle.hide();
    });
  }
}
