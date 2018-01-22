import { ComponentRef, Inject, Injectable, TemplateRef, Type } from '@angular/core';
import { keyEscape, KitEventManagerService } from '../kit-event-manager';
import { KitOverlayService } from '../kit-overlay/kit-overlay.service';
import { Partial } from '../util';
import { KitModalBackdropComponent } from './kit-modal-backdrop/kit-modal-backdrop.component';
import { KitModalRef } from './kit-modal-ref';
import { kitModalDefaultParams, KitModalParams } from './meta';

@Injectable()
export class KitModalService {
  private backdropRef: ComponentRef<KitModalBackdropComponent>;

  private displayed = new Set<KitModalRef<any>>();

  constructor(
    private overlay: KitOverlayService,
    private em: KitEventManagerService,
    @Inject(kitModalDefaultParams) private defaultParams: Partial<KitModalParams>,
  ) {
    this.backdropRef = this.overlay.hostComponent(KitModalBackdropComponent);
    this.backdropRef.instance.click.subscribe(() => {
      this.backdropClickHandler();
    });
  }

  show<T>(component: Type<T>, params: Partial<KitModalParams> = {}): KitModalRef<T> {
    const modalRef = new KitModalRef();
    const componentRef = this.overlay.hostComponent<T>(component, [
      {
        provide: KitModalRef,
        useValue: modalRef,
      },
    ]);
    modalRef.params = {...this.defaultParams, ...params};
    modalRef.viewRef = componentRef.hostView;
    modalRef.onClose.subscribe(() => {
      componentRef.destroy();
      modalRef.destroy();
    });
    this.registerRef(modalRef);
    return modalRef;
  }

  showTemplate(
    template: TemplateRef<any>,
    modalRef: KitModalRef<any>,
  ): KitModalRef<any> {
    const viewRef = this.overlay.hostTemplate(template);
    modalRef.viewRef = viewRef;
    modalRef.onClose.subscribe(() => {
      viewRef.destroy();
      modalRef.destroy();
    });
    this.registerRef(modalRef);
    return modalRef;
  }

  registerRef(ref: KitModalRef<any>) {
    this.displayed.add(ref);
    // control esc
    const escUnsub = this.em.listenGlobal('keydown', (event: KeyboardEvent) => {
      if (event.keyCode === keyEscape && ref.params.escClose) {
        ref.close();
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
    const top = this.getTopModalRef();
    if (top) {
      this.overlay.moveUnder(this.backdropRef.hostView, top.viewRef);
    }
  }

  private backdropClickHandler() {
    const top = this.getTopModalRef();
    if (top && top.params.backdropClose) {
      top.close();
    }
  }

  private getTopModalRef(): KitModalRef<any> | undefined {
    return Array.from(this.displayed.values()).pop();
  }
}
