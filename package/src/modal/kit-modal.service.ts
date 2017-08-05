import { ComponentRef, Injectable, Type } from '@angular/core';
import { KitOverlayService } from '../core/overlay/kit-overlay.service';
import { DialogHandlers } from './meta';

@Injectable()
export class KitModalService {
  private dialogRef: ComponentRef<any>;

  constructor(private overlay: KitOverlayService) {
  }

  hide() {
    this.dialogRef.destroy();
  }

  show<T extends DialogHandlers>(component: Type<T>): T {
    const modalRef: ComponentRef<T> = this.overlay.host<T>(component);
    const instance: T = modalRef.instance;
    // subscribe to modal events
    // close event
    instance.close.subscribe(() => {
      modalRef.destroy();
    });
    // store modalRef
    this.dialogRef = modalRef;
    // return instance
    return instance;
  }
}
