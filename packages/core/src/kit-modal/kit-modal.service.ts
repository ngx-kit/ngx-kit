import { DOCUMENT } from '@angular/common';
import { ComponentFactoryResolver, forwardRef, Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { KitEventManagerService } from '../kit-event-manager/kit-event-manager.service';
import { keyEscape } from '../kit-event-manager/meta';
import { KitOverlayComponentRef } from '../kit-overlay/kit-overlay-component-ref';
import { KitOverlayService } from '../kit-overlay/kit-overlay.service';
import { KitPlatformService } from '../kit-platform/kit-platform.service';
import { KitModalBackdropComponent } from './kit-modal-backdrop/kit-modal-backdrop.component';
import { KitModalRef } from './kit-modal-ref';
import { KitModalOptions, KitModalShowArgs } from './meta';

/**
 * Modal dialogs are displayed in a layer is above of the page content.
 *
 *
 * ### Usage
 *
 * Core does not provide styling or structure for modal, only tools for controlling overlay, backdrop, nesting, a11y.
 *
 * You can use Angular component composition and create any set of modals.
 *
 * ```typescript
 * export class DemoComponent {
 *   private modalRef: KitModalRef<DemoModalComponent>;
 *
 *   constructor(private modalService: KitModalService) {
 *   }
 *
 *   showModal() {
 *     this.modalRef = this.modalService.show({component: DemoModalComponent});
 *   }
 *
 *   closeModal() {
 *     this.modalRef.close();
 *   }
 * }
 * ```
 *
 * You can provide `KitModalRef` in `DemoModalComponent`:
 *
 * ```typescript
 * export class DemoModalComponent {
 *   constructor(private modalRef: KitModalRef<DemoModalComponent>) {
 *   }
 *
 *   close() {
 *     this.modalRef.close();
 *   }
 * }
 * ```
 *
 * When `KitModalRef.close()` called it destroys component instance.
 *
 * Do not forget to define `DemoModalComponent` in `entryComponents`.
 *
 * #### Configuration
 *
 * Available options:
 *   * `backdropClose` (default: `true`) - indicating if clicking the backdrop should close the modal.
 *   * `escClose` (default: `true`) - indicating if pressing the `esc` key should close the modal.
 *   * `scrollLock` (default: `true`) - indicating if scroll of body is disabled while modal is displayed.
 *
 * Modal options can be passed by DI provider, `KitModelService.show()` method or with `kit-modal` params.
 *
 * ```typescript
 * this.modalService.show({component: DemoModalComponent, options: {backdropClose: false}});
 * ```
 *
 * ##### Default config
 *
 * If you want to redefine default options with DI you should define all options:
 *
 * ```typescript
 * providers: [
 *   {
 *     provide: KitModalOptions,
 *     useValue: {
 *       backdropClose: true,
 *       escClose: true,
 *       scrollLock: true,
 *     },
 *   },
 * ],
 * ```
 *
 * #### Data-binding
 *
 * For service-hosted modals we have methods for communication with component instance.
 *
 * ##### input
 *
 * ```typescript
 * export class DemoModalComponent {
 *   @Input() field: string;
 * }
 * ```
 *
 * ```typescript
 * this.modalRef = this.modalService.show({component: DemoModalComponent});
 * this.modalRef.input({field: 'value'});
 * ```
 *
 * `input` method passes value to the defined field and calls `ngOnChanges` life-cycle hook (if needed).
 *
 * ##### output
 *
 * ```typescript
 * export class DemoModalComponent {
 *   @Output() event = new EventEmitter<any>();
 * }
 * ```
 *
 * ```typescript
 * this.modalRef = this.modalService.show({component: DemoModalComponent});
 * this.modalRef.instance.event.subscribe((value: any) => {
 * });
 * ```
 *
 * As you can see `DemoModalComponent` can be used both in the service-hosted and in the template-hosted approach.
 *
 * ```html
 * <kit-modal>
 *   <demo-modal *kitOverlay="display"
 *               [field]=""
 *               (event)="">
 *   </demo-modal>
 * </kit-modal>
 * ```
 *
 * #### Guards
 *
 * ##### `canClose`
 *
 * Handy for service-hosted modals when you don't have full control of closing process.
 *
 * If `canClose` method returns `false` modal will not be destroyed.
 *
 * ```typescript
 * export class DemoModalComponent implements KitModalCanClose {
 *   canClose(): boolean {
 *   }
 * }
 * ```
 *
 * #### Modal components in Lazy Modules
 *
 * You could get error `No component factory found for NameOfModalComponent` inside Lazy Modules. To solve the problem
 *     just provide `KitModelService` in this module.
 *
 *
 * ### Example
 *
 * * collection:modal - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-modal),
 *     [demo](https://ngx-kit.com/collection/module/ui-modal)
 */
@Injectable({
  providedIn: 'root',
})
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
      ref.options = {...this.options, ...options};
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
      if (top && top.options.scrollLock) {
        this.document.body.style.overflow = 'hidden';
      } else {
        this.document.body.style.removeProperty('overflow');
      }
    }
  }

  private backdropClickHandler() {
    const top = this.getTopModalRef();
    if (top && top.options.backdropClose) {
      top.onClose.next();
    }
  }

  private escHandler() {
    const top = this.getTopModalRef();
    if (top && top.options.escClose) {
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
        if (event.code === 'Escape') {
          this.escHandler();
        }
      }, true);
    }
  }
}
