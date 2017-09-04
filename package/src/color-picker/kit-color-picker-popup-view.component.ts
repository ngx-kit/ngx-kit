import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { StylerComponent } from '@ngx-kit/styler';
import { KitComponentStyle } from '../core/meta/component';
import { KitCoreOverlayComponent, KitCoreOverlayContainerPosition } from '../core/meta/overlay';
import { kitColorPickerPopupStyle } from '../core/meta/tokens';

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
          (sliderMouseUp)="sliderMouseUp.emit()"
          styler="popup"></kit-color-picker>
    </kit-overlay-container>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitColorPickerPopupViewComponent implements OnInit, KitCoreOverlayComponent {
  @Input() anchor: HTMLElement;

  @Input() color: string;

  @Output() colorChange = new EventEmitter<string>();

  @Input() debounce: number;

  @Input() kitColorPickerPopupView: null;

  @Input() opened = false;

  @Input() position: KitCoreOverlayContainerPosition;

  @Output() sliderMouseUp = new EventEmitter<any>();

  @Input() text: string;

  constructor(private styler: StylerComponent,
              @Inject(kitColorPickerPopupStyle) private style: KitComponentStyle,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-color-picker-popup';
    this.styler.register(this.style);
  }

  ngOnInit() {
  }

  cdrCheck() {
    this.cdr.markForCheck();
  }
}
