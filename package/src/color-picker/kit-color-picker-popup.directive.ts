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
import { KitColorPickerPopupViewComponent } from './kit-color-picker-popup-view.component';

@Directive({
  selector: '[kitColorPickerPopup]',
})
export class KitColorPickerPopupDirective implements OnInit, OnDestroy, OnChanges, AfterContentInit {
  @Input() color: string;

  @Output() colorChange = new EventEmitter<string>();

  @Input() debounce: number;

  @HostBinding('class') hostClass: string;

  @Input() kitColorPickerPopup: string;

  @Input() kitColorPickerPopupPosition: KitCoreOverlayContainerPosition = 'top';

  private containerRef: ComponentRef<KitColorPickerPopupViewComponent>;

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
      this.colorChange.subscribe(this.model.update);
      // from ngModel
      if (this.model.valueChanges) {
        this.model.valueChanges.subscribe((color: string) => {
          this.color = color;
          this.proxyProps();
        });
      }
      // proxy to/from formControl
    } else if (this.formControlDirective) {
      const control: FormControl = this.formControlDirective.control;
      // to formControl
      this.colorChange.subscribe((color: string) => {
        control.setValue(color);
      });
      // from formControl
      if (control.valueChanges) {
        // pass initial
        this.color = control.value;
        this.proxyProps();
        // subscribe on changes
        control.valueChanges.subscribe((color: string) => {
          this.color = color;
          this.proxyProps();
        });
      }
    }
  }

  private handleOutputs(instance: KitColorPickerPopupViewComponent) {
    instance.colorChange.subscribe(this.colorChange);
  }

  private proxyProps() {
    if (this.containerRef) {
      const instance = this.containerRef.instance;
      instance.position = this.kitColorPickerPopupPosition;
      instance.anchor = this.el.nativeElement;
      instance.color = this.color;
      instance.debounce = this.debounce;
    }
  }

  private show() {
    this.containerRef.instance.opened = true;
  }
}
