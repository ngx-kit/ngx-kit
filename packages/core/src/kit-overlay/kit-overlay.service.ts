import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
  TemplateRef,
  Type,
  ViewRef,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { KitOverlayHostComponent } from './kit-overlay-host/kit-overlay-host.component';

@Injectable()
export class KitOverlayService {
  private _onHostStable = new Subject<void>();

  private host: KitOverlayHostComponent;

  private hostRef: ComponentRef<KitOverlayHostComponent>;

  private container: Element;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) {
    this.mountHost();
  }

  get onHostStable(): Observable<void> {
    return this._onHostStable.asObservable();
  }

  /**
   * Render component on the overlay.
   *
   * @publicApi
   */
  hostComponent<T>(component: Type<T>): ComponentRef<T> {
    const injector = this.host.vcr.parentInjector;
    const componentFactory = injector.get(ComponentFactoryResolver).resolveComponentFactory(component);
    return this.host.vcr.createComponent(componentFactory, this.host.vcr.length, injector);
  }

  /**
   * Render template (passed by TemplateRef) on the overlay.
   *
   * @publicApi
   */
  hostTemplate(templateRef: TemplateRef<any>, context: any): ViewRef {
    return this.host.vcr.createEmbeddedView(templateRef, context);
  }

  private mountHost() {
    // Append container
    this.container = this.document.createElement('div');
    this.container.classList.add('kit-overlay-container');
    this.document.body.appendChild(this.container);
    // Create host
    const componentFactory = this.cfr.resolveComponentFactory(KitOverlayHostComponent);
    this.hostRef = componentFactory.create(this.injector);
    this.host = this.hostRef.instance;
    this.appRef.attachView(this.hostRef.hostView);
    // Track CD
    this.host.zone.onStable.subscribe(() => {
      this._onHostStable.next();
    });
    // At this point the component has been instantiated, so we move it to the location in the DOM
    // where we want it to be rendered.
    const componentRoot: HTMLElement = (this.hostRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.container.appendChild(componentRoot);
  }
}
