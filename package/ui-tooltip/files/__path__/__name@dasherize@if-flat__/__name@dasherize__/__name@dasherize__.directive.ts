import { ComponentRef, Directive, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, } from '@angular/core';
import { KitOverlayService } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>ViewComponent } from '../<%= dasherize(name) %>-view/<%= dasherize(name) %>-view.component';
import { <%= classify(name) %>Options } from '../meta';

/**
 * @todo simplify proxying
 */
@Directive({
  selector: '[<%= camelize(name) %>]',
})
export class <%= classify(name) %>Directive implements OnInit, OnChanges, OnDestroy {
  @Input() <%= camelize(name) %>: string;

  @Input() <%= camelize(name) %>Options: <%= classify(name) %>Options = {};

  private componentRef: ComponentRef<<%= classify(name) %>ViewComponent>;

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
      instance.content = this.<%= camelize(name) %>;
      instance.color = this.<%= camelize(name) %>Options.color || 'default';
      instance.position = this.<%= camelize(name) %>Options.position || 'top';
      instance.ngOnChanges();
    }
  }

  private show() {
    this.componentRef = this.overlayService.hostComponent<<%= classify(name) %>ViewComponent>(<%= classify(name) %>ViewComponent);
    this.proxyProps();
  }
}
