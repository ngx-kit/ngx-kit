import { DOCUMENT } from '@angular/common';
import { ComponentRef, Inject, Injectable, Type } from '@angular/core';
import { KitEventManagerService } from '../kit-event-manager/kit-event-manager.service';
import { keyEscape } from '../kit-event-manager/meta';
import { KitOverlayService } from '../kit-overlay/kit-overlay.service';
import { KitPlatformService } from '../kit-platform/kit-platform.service';
import { Partial } from '../util/partial';
import { KitModalBackdropComponent } from './kit-modal-backdrop/kit-modal-backdrop.component';
import { KitModalRef } from './kit-modal-ref';
import { kitModalDefaultOptions, KitModalOptions } from './meta';

@Injectable()
export class KitModalService {
  private backdropRef: ComponentRef<KitModalBackdropComponent>;

  private displayed = new Set<KitModalRef<any>>();

  constructor(
    private overlay: KitOverlayService,
    private em: KitEventManagerService,
    @Inject(kitModalDefaultOptions) private defaultOptions: Partial<KitModalOptions>,
    @Inject(DOCUMENT) private document: any,
    private platform: KitPlatformService,
  ) {
    this.backdropRef = this.overlay.hostComponent(KitModalBackdropComponent);
    this.backdropRef.instance.click.subscribe(() => {
      this.backdropClickHandler();
    });
  }

  show<T>(component: Type<T>, options: Partial<KitModalOptions> = {}): KitModalRef<T> {
    const ref = new KitModalRef<T>();
    const componentRef = this.overlay.hostComponent<T>(component, [
      {
        provide: KitModalRef,
        useValue: ref,
      },
    ]);
    ref.params = {...this.defaultOptions, ...options};
    ref.viewRef = componentRef.hostView;
    ref.instance = componentRef.instance;
    ref.onClose.subscribe(() => {
      componentRef.destroy();
      ref.onDestroy.next();
    });
    this.registerRef(ref);
    return ref;
  }

  /** @internal */
  registerRef(ref: KitModalRef<any>) {
    this.displayed.add(ref);
    // control esc
    const escUnsub = this.em.listenGlobal('keydown', (event: KeyboardEvent) => {
      if (event.keyCode === keyEscape && ref.params.escClose) {
        ref.onClose.next();
      }
    }, true);
    // update backdrop
    ref.onDestroy.subscribe(() => {
      this.displayed.delete(ref);
      escUnsub();
      this.checkBackdrop();
    });
    this.checkBackdrop();
  }

  private checkBackdrop() {
    this.backdropRef.instance.display = this.displayed.size > 0;
    // move backdrop
    const top = this.getTopModalRef();
    if (top) {
      this.overlay.moveUnder(this.backdropRef.hostView, top.viewRef);
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

  private getTopModalRef(): KitModalRef<any> | undefined {
    return Array.from(this.displayed.values()).pop();
  }
}
