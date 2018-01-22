import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector,
  TemplateRef, Type, ViewRef,
} from '@angular/core';
import { StaticProvider } from '@angular/core/src/di/provider';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { uuid } from '../util/uuid';
import { KitOverlayHostComponent } from './kit-overlay-host/kit-overlay-host.component';

@Injectable()
export class KitOverlayService {
  private _onHostStable = new Subject<void>();

  private host: KitOverlayHostComponent;

  private hostRef: ComponentRef<KitOverlayHostComponent>;

  private container: Element;

  constructor(
    @Inject(DOCUMENT) private document: any,
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
   */
  hostComponent<T>(component: Type<T>, providers: StaticProvider[] = []): ComponentRef<T> {
    const id = uuid();
    const injector = Injector.create({
      providers,
      parent: this.host.vcr.parentInjector,
    });
    const componentFactory = this.cfr.resolveComponentFactory(component);
    return this.host.vcr.createComponent<T>(componentFactory, this.host.vcr.length, injector);
  }

  /**
   * Render template (passed by TemplateRef) on the overlay.
   */
  hostTemplate(templateRef: TemplateRef<any>, context: any = {}): ViewRef {
    return this.host.vcr.createEmbeddedView(templateRef, context);
  }

  /**
   * Move passed ViewRef under target ViewRef.
   * Used for multi-modals backdrop handling.
   */
  moveUnder(ref: ViewRef, target: ViewRef) {
    const targetIndex = this.host.vcr.indexOf(target);
    this.host.vcr.move(ref, targetIndex - 1);
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
