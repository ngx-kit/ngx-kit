import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { KitMultiOutletType } from './meta';

@Directive({
  selector: '[kitMultiOutlet]',
})
export class KitMultiOutletDirective implements OnInit, OnChanges {
  @Input() kitMultiOutlet: KitMultiOutletType;

  @Input() kitMultiOutletParams: any;

  private componentRef: ComponentRef<any>;

  constructor(private vcr: ViewContainerRef) {
  }

  ngOnChanges() {
    if (this.kitMultiOutlet) {
      this.vcr.clear();
      if (this.kitMultiOutlet instanceof TemplateRef) {
        this.vcr.createEmbeddedView(this.kitMultiOutlet);
      } else {
        const injector = this.vcr.parentInjector;
        const componentFactory = injector.get(ComponentFactoryResolver).resolveComponentFactory(this.kitMultiOutlet);
        this.componentRef = this.vcr.createComponent(componentFactory, this.vcr.length, injector);
        this.proxyParams();
      }
    }
  }

  ngOnInit() {
  }

  private proxyParams() {
    if (this.kitMultiOutletParams && this.componentRef) {
      for (const key in this.kitMultiOutletParams) {
        if (this.kitMultiOutletParams.hasOwnProperty(key)) {
          this.componentRef.instance[key] = this.kitMultiOutletParams[key];
          console.log('*multi:setParam', key, this.componentRef.instance[key]);
        }
      }
      if (this.componentRef.instance.ngOnChanges) {
        // @todo collect changes
        this.componentRef.instance.ngOnChanges();
      }
      this.componentRef.changeDetectorRef.markForCheck();
    }
  }
}
