import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { KitOverlayComponentRef, KitOverlayService } from '@ngx-kit/core';
import { UiTooltipOptions } from '../meta';
import { UiTooltipViewComponent } from '../ui-tooltip-view/ui-tooltip-view.component';

@Directive({
  selector: '[uiTooltip]',
})
export class UiTooltipDirective implements OnInit, OnChanges, OnDestroy {
  @Input() uiTooltip: string;

  @Input() uiTooltipOptions: UiTooltipOptions = {};

  private componentRef: KitOverlayComponentRef<UiTooltipViewComponent>;

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
      this.componentRef.componentRef.destroy();
    }
  }

  private proxyProps() {
    if (this.componentRef) {
      this.componentRef.input({
        anchorEl: this.el.nativeElement,
        content: this.uiTooltip,
        color: this.uiTooltipOptions.color || 'default',
        position: this.uiTooltipOptions.position || 'top-center',
      });
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
