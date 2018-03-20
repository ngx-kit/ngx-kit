import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { KitOverlayService } from '@ngx-kit/core';
import { UiTooltipOptions } from '../meta';
import { UiTooltipViewComponent } from '../ui-tooltip-view/ui-tooltip-view.component';

/**
 * @todo simplify proxying
 */
@Directive({
  selector: '[uiTooltip]',
})
export class UiTooltipDirective implements OnInit, OnChanges, OnDestroy {
  @Input() uiTooltip: string;

  @Input() uiTooltipOptions: UiTooltipOptions = {};

  private componentRef: ComponentRef<UiTooltipViewComponent>;

  constructor(
    private el: ElementRef,
    private overlayService: KitOverlayService,
    private vcr: ViewContainerRef,
  ) {
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
      instance.content = this.uiTooltip;
      instance.color = this.uiTooltipOptions.color || 'default';
      instance.position = this.uiTooltipOptions.position || 'top';
      instance.ngOnChanges();
    }
  }

  private show() {
    this.componentRef = this.overlayService.hostComponent<UiTooltipViewComponent>({
      component: UiTooltipViewComponent,
      viewContainerRef: this.vcr,
    });
    this.proxyProps();
  }
}
