import {
  ComponentRef, Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnDestroy, OnInit
} from '@angular/core';

import { KitTooltipViewComponent } from './kit-tooltip-view.component';
import { KitOverlayService, OverlayContainerPosition } from '@ngx-kit/core';

@Directive({
  selector: '[kitTooltip]',
})
export class KitTooltipDirective implements OnInit, OnDestroy, OnChanges {

  private containerRef: ComponentRef<KitTooltipViewComponent>;

  @Input('kitTooltip') text: string;
  @Input('kitTooltipPosition') position: OverlayContainerPosition = 'top';

  @HostBinding('class') hostClass: string;

  @HostListener('mouseenter') mouseenter() {
    this.show();
  }

  @HostListener('mouseleave') mouseleave() {
    this.hide();
  }

  constructor(private overlay: KitOverlayService,
              private el: ElementRef) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.proxyProps();
  }

  ngOnDestroy() {
    // @todo destr
  }

  private show() {
    this.containerRef = this.overlay.host<KitTooltipViewComponent>(KitTooltipViewComponent);
    this.proxyProps();
  }

  private proxyProps() {
    if (this.containerRef) {
      const instance = this.containerRef.instance;
      instance.text = this.text;
      instance.position = this.position;
      instance.anchor = this.el.nativeElement;
    }
  }

  private hide() {
    this.containerRef.destroy();
  }

}
