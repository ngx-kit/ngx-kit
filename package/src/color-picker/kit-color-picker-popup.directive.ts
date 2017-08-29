import {
  AfterContentInit,
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { FormControl, FormControlName, NgModel } from '@angular/forms';
import { KitCoreOverlayContainerPosition } from '../core/meta/overlay';
import { KitOverlayService } from '../core/overlay/kit-overlay.service';
import { Partial } from '../core/util/partial';
import { KitColorPickerPopupViewComponent } from './kit-color-picker-popup-view.component';
import { KitColorPickerPopupOptions } from './meta';

@Directive({
  selector: '[kitColorPickerPopup]',
})
export class KitColorPickerPopupDirective implements OnInit, OnDestroy, OnChanges, AfterContentInit {
  @HostBinding('class') hostClass: string;

  @Input() kitColorPickerPopupColor: string;

  @Output() kitColorPickerPopupColorChange = new EventEmitter<string>();

  @Output() kitColorPickerPopupSliderMouseUp = new EventEmitter<any>();

  @Input('kitColorPickerPopup') options: Partial<KitColorPickerPopupOptions>;

  private containerRef: ComponentRef<KitColorPickerPopupViewComponent>;

  private debounce: number;

  private position: KitCoreOverlayContainerPosition = 'top';

  constructor(private overlay: KitOverlayService,
              private el: ElementRef,
              @Optional() @Host() private model: NgModel,
              @Optional() @Host() private formControlDirective: FormControlName) {
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.containerRef = this.overlay.host<KitColorPickerPopupViewComponent>(KitColorPickerPopupViewComponent);
      this.handleOutputs(this.containerRef.instance);
      this.proxyProps();
    }, 1);
  }

  ngOnChanges() {
    this.setDebounce();
    this.setPosition();
    this.proxyProps();
  }

  ngOnDestroy() {
    this.containerRef.destroy();
  }

  ngOnInit() {
    this.initValueAccessorHandlers();
  }

  @HostListener('click')
  click() {
    this.show();
  }

  initValueAccessorHandlers() {
    // proxy to/from ngModel
    // @todo unsubscribe?
    if (this.model) {
      // to ngModel
      this.kitColorPickerPopupColorChange.subscribe(this.model.update);
      // from ngModel
      if (this.model.valueChanges) {
        this.model.valueChanges.subscribe((color: string) => {
          this.kitColorPickerPopupColor = color;
          this.proxyProps();
        });
      }
      // proxy to/from formControl
    } else if (this.formControlDirective) {
      const control: FormControl = this.formControlDirective.control;
      // to formControl
      this.kitColorPickerPopupColorChange.subscribe((color: string) => {
        control.setValue(color);
      });
      // from formControl
      if (control.valueChanges) {
        // pass initial
        this.kitColorPickerPopupColor = control.value;
        this.proxyProps();
        // subscribe on changes
        control.valueChanges.subscribe((color: string) => {
          this.kitColorPickerPopupColor = color;
          this.proxyProps();
        });
      }
    }
  }

  private handleOutputs(instance: KitColorPickerPopupViewComponent) {
    instance.colorChange.subscribe(this.kitColorPickerPopupColorChange);
    instance.sliderMouseUp.subscribe(this.kitColorPickerPopupSliderMouseUp);
  }

  private proxyProps() {
    if (this.containerRef) {
      const instance = this.containerRef.instance;
      instance.position = this.position;
      instance.anchor = this.el.nativeElement;
      instance.color = this.kitColorPickerPopupColor;
      instance.debounce = this.debounce;
      instance.cdrCheck();
    }
  }

  private setDebounce() {
    if (this.options && this.options.debounce !== undefined) {
      this.debounce = this.options.debounce;
    }
  }

  private setPosition() {
    if (this.options && this.options.position) {
      this.position = this.options.position;
    }
  }

  private show() {
    this.containerRef.instance.opened = true;
    this.containerRef.instance.cdrCheck();
  }
}
