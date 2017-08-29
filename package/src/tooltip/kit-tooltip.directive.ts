import {
  AfterContentInit,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { KitCoreOverlayContainerPosition } from '../core/meta/overlay';
import { KitOverlayService } from '../core/overlay/kit-overlay.service';
import { Partial } from '../core/util/partial';
import { KitTooltipViewComponent } from './kit-tooltip-view.component';
import { KitTooltipOptions } from './meta';

@Directive({
  selector: '[kitTooltip]',
})
export class KitTooltipDirective implements OnInit, OnDestroy, OnChanges, AfterContentInit {
  @Input() kitTooltip: string;

  @Input('kitTooltipOptions') options: Partial<KitTooltipOptions>;

  private color: string;

  private containerRef: ComponentRef<KitTooltipViewComponent>;

  private position: KitCoreOverlayContainerPosition = 'top';

  constructor(private overlay: KitOverlayService,
              private el: ElementRef) {
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.containerRef = this.overlay.host<KitTooltipViewComponent>(KitTooltipViewComponent);
      this.proxyProps();
    }, 1);
  }

  ngOnChanges() {
    this.setColor();
    this.setPosition();
    this.proxyProps();
  }

  ngOnDestroy() {
    this.containerRef.destroy();
  }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.show();
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.hide();
  }

  private hide() {
    this.containerRef.instance.opened = false;
    this.containerRef.instance.cdrCheck();
  }

  private proxyProps() {
    if (this.containerRef) {
      const instance = this.containerRef.instance;
      instance.text = this.kitTooltip;
      instance.position = this.position;
      instance.anchor = this.el.nativeElement;
      instance.color = this.color;
      instance.cdrCheck();
    }
  }

  private setColor() {
    if (this.options && this.options.color) {
      this.color = this.options.color;
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
