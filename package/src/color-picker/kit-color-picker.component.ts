import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Inject,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { hsl, hsla, StylerComponent } from '@ngx-kit/styler';
import 'rxjs/add/operator/debounceTime';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { KitControl } from '../core/meta/control';
import { kitColorPickerStyle } from '../core/meta/tokens';
import { Hsva, SliderDimension, SliderPosition } from './classes';
import { hsvaToHsla } from './utils/hsva-to-hsla';
import { stringToHsva } from './utils/string-to-hsva';

export const KIT_COLOR_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KitColorPickerComponent),
  multi: true,
};

@Component({
  selector: 'kit-color-picker,[kitColorPicker]',
  template: `
    <div [kitColorPickerSlider]
         [style.background-color]="hueSliderColor"
         [rgX]="1"
         [rgY]="1"
         [style.height.px]="sbHeight"
         (newValue)="setSaturationAndBrightness($event)"
         (mouseUp)="sliderMouseUp.emit()"
         #sbSlider
         styler="saturation">
      <div [style.left.px]="slider.s"
           [style.top.px]="slider.v"
           styler="cursor"></div>
    </div>
    <div [kitColorPickerSlider]
         [rgX]="1"
         (newValue)="setHue($event)"
         (mouseUp)="sliderMouseUp.emit()"
         styler="hue">
      <div [style.left.px]="slider.h"
           styler="cursor"></div>
    </div>
    <div [hidden]="cpAlphaChannel==='disabled'"
         [kitColorPickerSlider]
         [style.background-color]="alphaSliderColor"
         [rgX]="1"
         (newValue)="setAlpha($event)"
         (mouseUp)="sliderMouseUp.emit()"
         styler="alpha"
         #alphaSlider>
      <div [style.left.px]="slider.a"
           styler="cursor"></div>
    </div>
  `,
  providers: [KIT_COLOR_PICKER_VALUE_ACCESSOR],
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitColorPickerComponent implements OnInit, ControlValueAccessor, KitControl<string> {
  @ViewChild('alphaSlider') alphaSlider: any;

  alphaSliderColor: string;

  cpAlphaChannel: string;

  @Input() debounce: number;

  hueSliderColor: string;

  @Input() kitColorPicker: null;

  /**
   * Saturation/brightness field height.
   * @type {number}
   */
  @Input() sbHeight = 100;

  @ViewChild('sbSlider') sbSlider: any;

  slider: SliderPosition;

  @Output() sliderMouseUp = new EventEmitter<any>();

  state: string;

  @Input() width = 200;

  private changes$ = new Subject<string>();

  private debouncedValue = new Subject<string>();

  private hsva: Hsva;

  private initialColor = '#ffffff';

  // @todo do not change if disabled
  private isDisabled = false;

  private outputColor: string;

  private sliderDimMax: SliderDimension;

  private touches$ = new Subject<boolean>();

  constructor(private styler: StylerComponent,
              @Inject(kitColorPickerStyle) private style: KitComponentStyle,
              private el: ElementRef,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-color-picker';
    this.styler.register(this.style);
    this.sliderDimMax = new SliderDimension(this.width, this.width, this.sbHeight, this.width);
    this.slider = new SliderPosition(0, 0, 0, 0);
    this.setColorFromString(this.initialColor, false);
  }

  @HostBinding('style.width.px')
  get hostWidth() {
    return this.width;
  }

  ngOnInit() {
    // proxy to value accessor
    this.debouncedValue
        .debounceTime(this.debounce)
        .subscribe(value => {
          this.updateValue(value);
        });
  }

  registerOnChange(fn: any) {
    this.changes$.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$.subscribe(fn);
  }

  setAlpha(val: {v: number, rg: number}) {
    this.hsva.a = val.v / val.rg;
    this.update();
  }

  setColorFromString(value: string, emit: boolean = true) {
    const hsva = stringToHsva(value);
    if (hsva) {
      this.hsva = hsva;
      this.update(emit);
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  setHue(val: {v: number, rg: number}) {
    this.hsva.h = val.v / val.rg;
    this.update();
  }

  setSaturationAndBrightness(val: {s: number, v: number, rgX: number, rgY: number}) {
    this.hsva.s = val.s / val.rgX;
    this.hsva.v = val.v / val.rgY;
    this.update();
  }

  update(emit: boolean = true) {
    // convert color
    const hslaValue = hsvaToHsla(this.hsva);
    // calc alpha slider background
    this.alphaSliderColor = hsl(hslaValue);
    // calc sb slider background
    const hueHsla = hsvaToHsla({h: this.hsva.h, s: 1, v: 1, a: 1});
    this.hueSliderColor = hsl(hueHsla);
    // gen rgb/rgba color
    const color = hsla(hslaValue);
    // recalc slider positions
    this.slider = new SliderPosition((this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8,
        (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
    // output color if changed and needed
    if (emit && this.outputColor !== color) {
      this.outputColor = color;
      if (this.debounce === 0) {
        this.updateValue(this.outputColor);
      } else {
        this.debouncedValue.next(this.outputColor);
      }
    }
  }

  updateValue(value: string) {
    this.writeValue(value);
    this.changes$.next(this.outputColor);
    this.touches$.next(true);
  }

  writeValue(value: string) {
    this.state = value;
    if (value !== this.outputColor) {
      this.setColorFromString(value, false);
    }
    this.cdr.markForCheck();
  }
}
