import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  Type,
} from '@angular/core';
import { KitCoreOverlayComponent } from './meta';

@Injectable()
export class KitOverlayService {
  private rootRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private injector: Injector) {
  }

  host<T extends KitCoreOverlayComponent>(component: Type<T>): ComponentRef<T> {
    this.detectRoot();
    const factory = this.resolver.resolveComponentFactory(component);
    const componentRef = factory.create(this.injector);
    this.applicationRef.attachView(componentRef.hostView);
    (this.rootRef.hostView as EmbeddedViewRef<any>).rootNodes[0].appendChild((componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0]);
    return componentRef;
  }

  private detectRoot() {
    if (!this.rootRef) {
      this.rootRef = this.applicationRef['_rootComponents'][0];
    }
  }
}
