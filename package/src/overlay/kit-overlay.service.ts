import { ComponentFactoryResolver, ComponentRef, Injectable, TemplateRef, Type, ViewRef, } from '@angular/core';
import { KitOverlayHostComponent } from './kit-overlay-host.component';

@Injectable()
export class KitOverlayService {
  private host: KitOverlayHostComponent;

  hostComponent<T>(component: Type<T>): ComponentRef<T> {
    this.checkHost();
    const injector = this.host.vcr.parentInjector;
    const componentFactory = injector.get(ComponentFactoryResolver).resolveComponentFactory(component);
    return this.host.vcr.createComponent(componentFactory, this.host.vcr.length, injector);
  }

  hostTemplate(templateRef: TemplateRef<any>, context: any): ViewRef {
    return this.host.vcr.createEmbeddedView(templateRef, context);
  }

  registerHost(host: KitOverlayHostComponent) {
    this.host = host;
  }

  private checkHost() {
    if (!this.host) {
      throw new Error(`Pls add <kit-overlay-host></kit-overlay-host> to the app!`);
    }
  }
}
