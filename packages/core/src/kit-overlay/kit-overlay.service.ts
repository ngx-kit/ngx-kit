import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  forwardRef,
  Inject,
  Injectable,
  Injector,
  NgZone,
  Optional,
  SkipSelf,
  TemplateRef,
  Type,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { StaticProvider } from '@angular/core/src/di/provider';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { KitOverlayComponentRef } from './kit-overlay-component-ref';
import { KitOverlayHostWrapperComponent } from './kit-overlay-host/kit-overlay-host-wrapper.component';
import { KitOverlayHostComponent } from './kit-overlay-host/kit-overlay-host.component';

@Injectable()
export class KitOverlayService {
  private _onHostStable = new Subject<void>();

  private hostWrapperRef: ComponentRef<KitOverlayHostWrapperComponent>;

  private hostRef: ComponentRef<KitOverlayHostComponent>;

  private host: KitOverlayHostComponent;

  private container: Element;

  private isRoot: boolean;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Optional() @Inject(forwardRef(() => KitOverlayService)) @SkipSelf() private parent: KitOverlayService,
  ) {
    this.isRoot = !this.parent;
    if (this.isRoot) {
      this.mountHost();
    }
  }

  get onHostStable(): Observable<void> {
    return this.isRoot
      ? this._onHostStable.asObservable()
      : this.parent.onHostStable;
  }

  /**
   * Render component in the overlay.
   */
  hostComponent<T>(
    {component, providers = [], componentFactoryResolver, viewContainerRef}: {
      component: Type<T>;
      providers?: StaticProvider[];
      componentFactoryResolver?: ComponentFactoryResolver;
      viewContainerRef?: ViewContainerRef;
    },
  ): KitOverlayComponentRef<T> {
    if (this.isRoot) {
      // Pick passed vcr or from host
      const hostVcr = viewContainerRef || this.host.vcr;
      // Provide passed providers and parent injector
      const injector = Injector.create({
        providers,
        parent: hostVcr.injector,
      });
      // Create component
      const componentFactory = componentFactoryResolver
        ? componentFactoryResolver.resolveComponentFactory(component)
        : this.cfr.resolveComponentFactory(component);
      const ref = new KitOverlayComponentRef<T>();
      ref.componentRef = hostVcr.createComponent<T>(componentFactory, hostVcr.length, injector);
      // Move component to the host
      this.host.elRef.nativeElement.appendChild(this.getComponentRootNode(ref.componentRef));
      // Force change detection
      ref.componentRef.changeDetectorRef.detectChanges();
      // Proxy CD to the hosted component from host
      const cdSub: Subscription = hostVcr.injector.get<NgZone>(NgZone).onStable
        .subscribe(() => {
          ref.componentRef.changeDetectorRef.detectChanges();
        });
      ref.componentRef.onDestroy(() => {
        cdSub.unsubscribe();
      });
      // Return the ref
      return ref;
    } else {
      // Proxy to root
      return this.parent.hostComponent({component, providers, componentFactoryResolver, viewContainerRef});
    }
  }

  /**
   * Render template (passed by TemplateRef) on the overlay.
   */
  hostTemplate(
    {templateRef, context = {}, viewContainerRef}: {
      templateRef: TemplateRef<any>,
      context?: any;
      viewContainerRef?: ViewContainerRef;
    },
  ): ViewRef {
    if (this.isRoot) {
      const hostVcr = viewContainerRef || this.host.vcr;
      const ref = hostVcr.createEmbeddedView(templateRef, context);
      this.host.elRef.nativeElement.appendChild(this.getTemplateRootNode(ref));
      return ref;
    } else {
      return this.parent.hostTemplate({templateRef, context, viewContainerRef});
    }
  }

  /**
   * Move passed ViewRef under target ViewRef.
   * Used for multi-modals backdrop handling.
   */
  moveUnder(ref: ViewRef, target: ViewRef) {
    if (this.isRoot) {
      this.getTemplateRootNode(this.hostRef.hostView)
        .insertBefore(this.getTemplateRootNode(ref), this.getTemplateRootNode(target));
    } else {
      this.parent.moveUnder(ref, target);
    }
  }

  /** Gets the root HTMLElement for an instantiated component. */
  private getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement {
    return this.getTemplateRootNode(componentRef.hostView);
  }

  private getTemplateRootNode(viewRef: EmbeddedViewRef<any> | ViewRef): HTMLElement {
    return (viewRef as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }

  private mountHost() {
    if (!this.isRoot) {
      throw new Error(`Run .mountHost() only for root service`);
    }
    // Append container
    this.container = this.document.createElement('div');
    this.container.classList.add('kit-overlay-container');
    this.document.body.appendChild(this.container);
    // Create host-wrapper
    const hostWrapperFactory = this.cfr.resolveComponentFactory(KitOverlayHostWrapperComponent);
    this.hostWrapperRef = hostWrapperFactory.create(this.injector);
    this.container.appendChild(this.getComponentRootNode(this.hostWrapperRef));
    // Create host
    const hostFactory = this.cfr.resolveComponentFactory(KitOverlayHostComponent);
    const wrapperVcr = this.hostWrapperRef.instance.vcr;
    this.hostRef = wrapperVcr.createComponent(hostFactory, wrapperVcr.length, this.injector);
    this.host = this.hostRef.instance;
    this.container.appendChild(this.getComponentRootNode(this.hostRef));
    // Track CD
    this.host.zone.onStable.subscribe(() => {
      this._onHostStable.next();
    });
  }
}
