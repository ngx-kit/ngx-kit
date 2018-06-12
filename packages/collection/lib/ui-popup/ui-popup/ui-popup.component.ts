import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, OnInit } from '@angular/core';
import { KitOutsideClickService, KitOverlayToggleDirective, KitPinPosition } from '@ngx-kit/core';

@Component({
  selector: 'ui-popup',
  templateUrl: './ui-popup.component.html',
  styleUrls: ['./ui-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
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
export class UiPopupComponent implements OnInit, OnChanges {
  @Input() toggle: KitOverlayToggleDirective;

  @Input() position: KitPinPosition = 'top-center';

  @HostBinding('attr.aria-label') ariaLabel = 'Popup description';

  @HostBinding('attr.aria-modal') ariaModal = true;

  @HostBinding('@host') hostTrigger = true;

  constructor(
    private outsideClick: KitOutsideClickService,
  ) {
  }

  ngOnChanges() {
    this.outsideClick.skip = [this.toggle.nativeEl];
  }

  ngOnInit() {
    this.outsideClick.outsideClick.subscribe(e => {
      this.toggle.hide();
    });
  }
}
