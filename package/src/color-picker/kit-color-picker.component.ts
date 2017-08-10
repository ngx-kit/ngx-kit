import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { StylerColorService, StylerComponent } from '@ngx-kit/styler';
import 'rxjs/add/operator/debounceTime';
import { Subject } from 'rxjs/Subject';
import { KitComponentStyle } from '../core/meta/component';
import { kitComponentColorPicker } from '../core/meta/tokens';
import { Hsva, SliderDimension, SliderPosition } from './classes';
import { hsvaToHsla } from './utils/hsva-to-hsla';
import { stringToHsva } from './utils/string-to-hsva';

@Component({
  selector: 'kit-color-picker,[kitColorPicker]',
  template: `
    <div [kitColorPickerSlider]
         [style.background-color]="hueSliderColor"
         [rgX]="1"
         [rgY]="1"
         (newValue)="setSaturationAndBrightness($event)"
         #sbSlider
         [style.height.px]="sbHeight"
         styler="saturation">
      <div [style.left.px]="slider.s"
           [style.top.px]="slider.v"
           styler="cursor"></div>
    </div>
    <div [kitColorPickerSlider]
         [rgX]="1"
         (newValue)="setHue($event)"
         styler="hue">
      <div [style.left.px]="slider.h"
           styler="cursor"></div>
    </div>
    <div [hidden]="cpAlphaChannel==='disabled'"
         [kitColorPickerSlider]
         [style.background-color]="alphaSliderColor"
         [rgX]="1"
         (newValue)="setAlpha($event)"
         styler="alpha"
         #alphaSlider>
      <div [style.left.px]="slider.a"
           styler="cursor"></div>
    </div>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitColorPickerComponent implements OnInit {
  @ViewChild('alphaSlider') alphaSlider: any;

  alphaSliderColor: string;

  @Output() colorChange = new EventEmitter<string>();

  cpAlphaChannel: string;

  @Input() debounce: number;

  hueSliderColor: string;

  @Input() kitColorPicker: any;

  /**
   * Saturation/brightness field height.
   * @type {number}
   */
  @Input() sbHeight = 100;

  @ViewChild('sbSlider') sbSlider: any;

  slider: SliderPosition;

  @Input() width = 200;

  private debouncedValue = new Subject<string>();

  private hsva: Hsva;

  private initialColor = '#ffffff';

  private outputColor: string;

  private sliderDimMax: SliderDimension;

  constructor(private styler: StylerComponent,
              @Inject(kitComponentColorPicker) private style: KitComponentStyle,
              private colorService: StylerColorService,
              private el: ElementRef,
              private cdr: ChangeDetectorRef) {
    this.styler.classPrefix = 'kit-color-picker';
    this.styler.register(this.style);
    this.sliderDimMax = new SliderDimension(this.width, this.width, this.sbHeight, this.width);
    this.slider = new SliderPosition(0, 0, 0, 0);
    this.setColorFromString(this.initialColor, false);
  }

  @Input()
  set color(color: string) {
    if (color !== this.outputColor) {
      this.setColorFromString(color, false);
      this.cdr.detectChanges();
    }
  }

  @HostBinding('style.width.px')
  get hostWidth() {
    return this.width;
  }

  ngOnInit() {
    this.debouncedValue
        .debounceTime(this.debounce)
        .subscribe(this.colorChange);
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
    const hsla = hsvaToHsla(this.hsva);
    // calc alpha slider background
    this.alphaSliderColor = this.colorService.hsl(hsla);
    // calc sb slider background
    const hueHsla = hsvaToHsla({h: this.hsva.h, s: 1, v: 1, a: 1});
    this.hueSliderColor = this.colorService.hsl(hueHsla);
    // gen rgb/rgba color
    const color = this.colorService.hsla(hsla);
    // recalc slider positions
    this.slider = new SliderPosition((this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8,
        (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
    // output color if changed and needed
    if (emit && this.outputColor !== color) {
      this.outputColor = color;
      if (this.debounce === 0) {
        this.colorChange.emit(this.outputColor);
      } else {
        this.debouncedValue.next(this.outputColor);
      }
    }
  }
}
