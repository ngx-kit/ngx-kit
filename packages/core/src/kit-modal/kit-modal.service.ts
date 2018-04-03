import { DOCUMENT } from '@angular/common';
import { ComponentFactoryResolver, forwardRef, Inject, Injectable, Optional, SkipSelf, } from '@angular/core';
import { KitEventManagerService } from '../kit-event-manager/kit-event-manager.service';
import { keyEscape } from '../kit-event-manager/meta';
import { KitOverlayComponentRef } from '../kit-overlay/kit-overlay-component-ref';
import { KitOverlayService } from '../kit-overlay/kit-overlay.service';
import { KitPlatformService } from '../kit-platform/kit-platform.service';
import { KitModalBackdropComponent } from './kit-modal-backdrop/kit-modal-backdrop.component';
import { KitModalRef } from './kit-modal-ref';
import { KitModalOptions, KitModalShowArgs } from './meta';

@Injectable()
export class KitModalService {
  private backdropRef: KitOverlayComponentRef<KitModalBackdropComponent>;

  private displayed = new Set<KitModalRef<any>>();

  private isRoot: boolean;

  constructor(
    private overlay: KitOverlayService,
    private em: KitEventManagerService,
    private options: KitModalOptions,
    @Inject(DOCUMENT) private document: any,
    private platform: KitPlatformService,
    @Optional() @Inject(forwardRef(() => KitModalService)) @SkipSelf() private parent: KitModalService,
    private cfr: ComponentFactoryResolver,
  ) {
    this.isRoot = !this.parent;
  }

  /**
   * Display component as modal in the overlay.
   */
  show<T>(
    {
      component,
      options,
      componentFactoryResolver,
      viewContainerRef,
    }: KitModalShowArgs<T>,
  ): KitModalRef<T> {
    if (this.isRoot) {
      this.initBackdrop();
      const ref = new KitModalRef<T>();
      const componentRef = this.overlay
        .hostComponent<T>({
          component,
          providers: [
            {
              provide: KitModalRef,
              useValue: ref,
            },
          ],
          componentFactoryResolver: componentFactoryResolver,
          viewContainerRef: viewContainerRef,
        });
      ref.params = {...this.options, ...options};
      ref.componentRef = componentRef;
      ref.viewRef = componentRef.componentRef.hostView;
      ref.onClose.subscribe(() => {
        // run closing guard if defined
        if (!ref.instance['canClose'] || ref.instance['canClose']()) {
          componentRef.componentRef.destroy();
          ref.onDestroy.next();
        }
      });
      this.addRef(ref);
      return ref;
    } else {
      return this.parent.show({
        component,
        options,
        componentFactoryResolver: componentFactoryResolver || this.cfr,
        viewContainerRef,
      });
    }
  }

  /** @internal */
  addRef(ref: KitModalRef<any>) {
    if (this.isRoot) {
      this.initBackdrop();
      this.displayed.add(ref);
      // update backdrop
      ref.onDestroy.subscribe(() => {
        this.displayed.delete(ref);
        this.checkBackdrop();
      });
      this.checkBackdrop();
    } else {
      this.parent.addRef(ref);
    }
  }

  private checkBackdrop() {
    this.backdropRef.input({display: this.displayed.size > 0});
    // move backdrop
    const top = this.getTopModalRef();
    if (top) {
      this.overlay.moveUnder(this.backdropRef.componentRef.hostView, top.viewRef);
    }
    // handle body scroll-lock
    if (this.platform.isBrowser() && this.document) {
      if (top && top.params.scrollLock) {
        this.document.body.style.overflow = 'hidden';
      } else {
        this.document.body.style.removeProperty('overflow');
      }
    }
  }

  private backdropClickHandler() {
    const top = this.getTopModalRef();
    if (top && top.params.backdropClose) {
      top.onClose.next();
    }
  }

  private escHandler() {
    const top = this.getTopModalRef();
    if (top && top.params.escClose) {
      top.onClose.next();
    }
  }

  private getTopModalRef(): KitModalRef<any> | undefined {
    return Array.from(this.displayed.values()).pop();
  }

  private initBackdrop() {
    if (!this.backdropRef) {
      this.backdropRef = this.overlay.hostComponent({component: KitModalBackdropComponent});
      // backdrop close handler
      this.backdropRef.componentRef.instance.close.subscribe(() => {
        this.backdropClickHandler();
      });
      // control esc
      this.em.listenGlobal('keydown', (event: KeyboardEvent) => {
        if (event.keyCode === keyEscape) {
          this.escHandler();
        }
      }, true);
    }
  }
}
