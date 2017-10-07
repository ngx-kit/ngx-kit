import { ComponentRef, Directive, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, } from '@angular/core';
import { KitOverlayService } from '@ngx-kit/ngx-kit';
import { KitTooltipViewComponent } from '../kit-tooltip-view/kit-tooltip-view.component';
import { KitTooltipOptions } from '../meta';

/**
 * @todo simplify proxying
 */
@Directive({
  selector: '[kitTooltip]',
})
export class KitTooltipDirective implements OnInit, OnChanges, OnDestroy {
  @Input() kitTooltip: string;

  @Input() kitTooltipOptions: KitTooltipOptions = {};

  private componentRef: ComponentRef<KitTooltipViewComponent>;

  constructor(private el: ElementRef,
              private overlayService: KitOverlayService) {
  }

  ngOnChanges() {
    this.proxyProps();
  }

  ngOnDestroy() {
    this.hide();
  }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  mouseenterHandler() {
    this.show();
  }

  @HostListener('mouseleave')
  mouseleaveHandler() {
    this.hide();
  }

  private hide() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  private proxyProps() {
    if (this.componentRef) {
      const instance = this.componentRef.instance;
      instance.anchorEl = this.el.nativeElement;
      instance.content = this.kitTooltip;
      instance.color = this.kitTooltipOptions.color || 'default';
      instance.position = this.kitTooltipOptions.position || 'top';
      instance.ngOnChanges();
    }
  }

  private show() {
    this.componentRef = this.overlayService.hostComponent<KitTooltipViewComponent>(KitTooltipViewComponent);
    this.proxyProps();
  }
}
