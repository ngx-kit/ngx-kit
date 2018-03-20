import { DOCUMENT } from '@angular/common';
import {
  ComponentFactoryResolver,
  ComponentRef,
  forwardRef,
  Inject,
  Injectable,
  Optional,
  SkipSelf,
  Type,
  ViewContainerRef,
} from '@angular/core';
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

  private isRoot: boolean;

  constructor(
    private overlay: KitOverlayService,
    private em: KitEventManagerService,
    @Inject(kitModalDefaultOptions) private defaultOptions: Partial<KitModalOptions>,
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
    component: Type<T>,
    options: Partial<KitModalOptions> = {},
    cfr?: ComponentFactoryResolver,
    vcr?: ViewContainerRef,
  ): KitModalRef<T> {
    console.log('MODAL SHOW', this.isRoot, cfr);
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
          componentFactoryResolver: cfr,
          viewContainerRef: vcr,
        });
      ref.params = {...this.defaultOptions, ...options};
      ref.viewRef = componentRef.hostView;
      ref.instance = componentRef.instance;
      ref.onClose.subscribe(() => {
        // run closing guard if defined
        if (!ref.instance['canClose'] || ref.instance['canClose']()) {
          componentRef.destroy();
          ref.onDestroy.next();
        }
      });
      this.registerRef(ref);
      return ref;
    } else {
      return this.parent.show(component, options, cfr || this.cfr, vcr);
    }
  }

  /** @internal */
  registerRef(ref: KitModalRef<any>) {
    if (this.isRoot) {
      this.displayed.add(ref);
      // update backdrop
      ref.onDestroy.subscribe(() => {
        this.displayed.delete(ref);
        this.checkBackdrop();
      });
      this.checkBackdrop();
    } else {
      this.parent.registerRef(ref);
    }
  }

  private checkBackdrop() {
    this.backdropRef.instance.display = this.displayed.size > 0;
    this.backdropRef.changeDetectorRef.detectChanges();
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
      // backdrop click handler
      this.backdropRef.instance.click.subscribe(() => {
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
