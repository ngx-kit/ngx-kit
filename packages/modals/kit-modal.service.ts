import { ComponentRef, Injectable, Type } from '@angular/core';
import { KitOverlayService } from '@ngx-kit/core';
import { DialogHandlers } from './interfaces';

@Injectable()
export class KitModalService {
  private dialogRef: ComponentRef<any>;

  constructor(private overlay: KitOverlayService) {
  }

  hide() {
    this.dialogRef.destroy();
  }

  show<T extends DialogHandlers>(component: Type<T>): T {
    let modalRef: ComponentRef<T> = this.overlay.host<T>(component);
    let instance: T = modalRef.instance;
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
