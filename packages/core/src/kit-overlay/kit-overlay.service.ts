import { ComponentFactoryResolver, ComponentRef, Injectable, TemplateRef, Type, ViewRef, } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { KitOverlayHostComponent } from './kit-overlay-host/kit-overlay-host.component';

@Injectable()
export class KitOverlayService {
  private _hostDoCheck$ = new Subject<void>();

  private host: KitOverlayHostComponent;

  get hostDoCheck$(): Observable<void> {
    return this._hostDoCheck$.asObservable();
  }

  hostComponent<T>(component: Type<T>): ComponentRef<T> {
    this.checkHost();
    const injector = this.host.vcr.parentInjector;
    const componentFactory = injector.get(ComponentFactoryResolver).resolveComponentFactory(component);
    return this.host.vcr.createComponent(componentFactory, this.host.vcr.length, injector);
  }

  hostDoCheckEmit() {
    this._hostDoCheck$.next();
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
