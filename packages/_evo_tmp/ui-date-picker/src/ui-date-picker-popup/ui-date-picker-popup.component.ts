import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { KitAnchor, KitFocusManagerService, KitOverlayToggleDirective } from '@ngx-kit/core';

@Component({
  selector: 'ui-date-picker-popup',
  templateUrl: './ui-date-picker-popup.component.html',
  styleUrls: ['./ui-date-picker-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitFocusManagerService,
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
export class UiDatePickerPopupComponent implements OnInit {
  @Input() anchor: KitAnchor | HTMLElement;

  @Input() toggle: KitOverlayToggleDirective;

  @HostBinding('attr.aria-label') ariaLabel = 'Datepicker popup';

  @HostBinding('attr.aria-modal') ariaModal = true;

  @HostBinding('@host') hostTrigger = true;

  @HostBinding('attr.role') role = 'dialog';

  constructor(
    private focusManager: KitFocusManagerService,
  ) {
    this.focusManager.autoCapture = true;
    this.focusManager.init();
  }

  ngOnInit() {
    this.focusManager.focusItem('grid');
  }
}
