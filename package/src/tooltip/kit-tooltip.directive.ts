import {
  AfterContentInit,
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { KitCoreOverlayContainerPosition } from '../core/meta/overlay';
import { KitOverlayService } from '../core/overlay/kit-overlay.service';
import { KitTooltipViewComponent } from './kit-tooltip-view.component';

@Directive({
  selector: '[kitTooltip]',
})
export class KitTooltipDirective implements OnInit, OnDestroy, OnChanges, AfterContentInit {
  @HostBinding('class') hostClass: string;

  @Input('kitTooltipPosition') position: KitCoreOverlayContainerPosition = 'top';

  @Input('kitTooltip') text: string;

  private containerRef: ComponentRef<KitTooltipViewComponent>;

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
  }

  private proxyProps() {
    if (this.containerRef) {
      const instance = this.containerRef.instance;
      instance.text = this.text;
      instance.position = this.position;
      instance.anchor = this.el.nativeElement;
    }
  }

  private show() {
    this.containerRef.instance.opened = true;
  }
}
