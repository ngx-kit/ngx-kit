import {
  AfterContentInit,
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { KitCoreOverlayContainerPosition } from '../core/meta/overlay';
import { KitOverlayService } from '../core/overlay/kit-overlay.service';
import { KitColorPickerPopupComponent } from './kit-color-picker-popup.component';

@Directive({
  selector: '[kitColorPicker]',
})
export class KitColorPickerDirective implements OnInit, OnDestroy, OnChanges, AfterContentInit {
  @Input() color: string;

  @Output() colorChange = new EventEmitter<string>();

  @HostBinding('class') hostClass: string;

  @Input() kitColorPicker: string;

  @Input() kitColorPickerPosition: KitCoreOverlayContainerPosition = 'top';

  private containerRef: ComponentRef<KitColorPickerPopupComponent>;

  constructor(private overlay: KitOverlayService,
              private el: ElementRef) {
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.containerRef = this.overlay.host<KitColorPickerPopupComponent>(KitColorPickerPopupComponent);
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
  }

  @HostListener('click')
  click() {
    this.show();
  }

  private handleOutputs(instance: KitColorPickerPopupComponent) {
    instance.colorChange.subscribe(this.colorChange);
  }

  private proxyProps() {
    if (this.containerRef) {
      const instance = this.containerRef.instance;
      instance.position = this.kitColorPickerPosition;
      instance.anchor = this.el.nativeElement;
      instance.color = this.color;
    }
  }

  private show() {
    this.containerRef.instance.opened = true;
  }
}
