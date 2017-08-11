import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { KitCoreOverlayContainerPosition } from '../core/meta/overlay';
import { kitComponentColorPickerPopup } from '../core/meta/tokens';

/**
 * @todo add pointer
 */
@Component({
  selector: 'kit-color-picker-popup-view,[kitColorPickerPopupView]',
  template: `
    <kit-overlay-container [type]="'dropdown'"
                           [anchor]="anchor"
                           [opened]="opened"
                           [position]="'bottom'"
                           (outsideClick)="opened = false">
      <kit-color-picker
          [debounce]="debounce"
          [ngModel]="color"
          (ngModelChange)="colorChange.emit($event)"
          styler="popup"></kit-color-picker>
    </kit-overlay-container>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitColorPickerPopupViewComponent implements OnInit {
  @Input() anchor: HTMLElement;

  @Input() color: string;

  @Output() colorChange = new EventEmitter<string>();

  @Input() debounce: number;

  @Input() kitColorPickerPopupView: any;

  @Input() opened = false;

  @Input() position: KitCoreOverlayContainerPosition;

  @Input() text: string;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentColorPickerPopup) private style: KitComponentStyle) {
    this.styler.classPrefix = 'kit-color-picker-popup';
    this.styler.register(this.style);
  }

  ngOnInit() {
  }
}
