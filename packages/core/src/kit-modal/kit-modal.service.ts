import { ComponentRef, Inject, Injectable, Type } from '@angular/core';
import { Partial } from '@ngx-kit/core';
import { KitOverlayService } from '../kit-overlay/kit-overlay.service';
import { KitModalBackdropComponent } from './kit-modal-backdrop/kit-modal-backdrop.component';
import { KitModalRef } from './kit-modal-ref';
import { kitModalDefaultParams, KitModalParams } from './meta';

@Injectable()
export class KitModalService {
  private backdropRef: ComponentRef<KitModalBackdropComponent> | null = null;

  private displayed = new Set<KitModalRef<any>>();

  constructor(
    private overlay: KitOverlayService,
    @Inject(kitModalDefaultParams) private defaultParams: Partial<KitModalParams>,
  ) {
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
    modalRef.onClose.subscribe(() => {
      componentRef.destroy();
      modalRef.destroy();
    });
    this.registerRef(modalRef);
    return modalRef;
  }

  registerRef(ref: KitModalRef<any>) {
    this.displayed.add(ref);
    ref.onDestroy.subscribe(() => {
      this.displayed.delete(ref);
      this.checkBackdrop();
    });
    this.checkBackdrop();
  }

  private checkBackdrop() {
    if (this.displayed.size > 0) {
      if (!this.backdropRef) {
        this.backdropRef = this.overlay.hostComponent(KitModalBackdropComponent);
        this.backdropRef.instance.click.subscribe(() => {
          this.closeTop();
        });
      }
    } else {
      if (this.backdropRef) {
        this.backdropRef.destroy();
        this.backdropRef = null;
      }
    }
  }

  private closeTop() {
    const top: KitModalRef<any> | undefined = Array.from(this.displayed.values()).pop();
    if (top && top.params.backdropClose) {
      top.close();
    }
  }
}
