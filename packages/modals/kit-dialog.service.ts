import { ComponentRef, Injectable, Type } from '@angular/core';

import { KitHostService } from '@ngx-kit/core';

import { DialogHandlers } from './interfaces';

@Injectable()
export class KitDialogService {

  private dialogRef: ComponentRef<any>;

  constructor(private host: KitHostService) {
  }

  show<T extends DialogHandlers>(component: Type<T>): T {
    let modalRef: ComponentRef<T> = this.host.host<T>(component);
    let instance: T = modalRef.instance;
    // subscribe to modal events
    // close event
    instance.close.subscribe(() => {
      console.log('close', 111);
      modalRef.destroy();
    });
    // store modalRef
    this.dialogRef = modalRef;
    // return instance
    return instance;
  }

  hide() {
    this.dialogRef.destroy();
  }

}
