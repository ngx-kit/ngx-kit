import {
  ComponentRef, Injectable,
  Type
} from '@angular/core';

import { KitComponentService, KitCoreService, KitHostService, KitThemeProps } from '@ngx-kit/core';

import { KitDialogTheme, DialogHandlers } from './interfaces';

@Injectable()
export class KitDialogService extends KitComponentService<KitDialogTheme> {

  private themeProps: KitThemeProps;
  private dialogRef: ComponentRef<any>;

  constructor(private kitCore: KitCoreService,
              private host: KitHostService) {
    super();
    // theming
    this.themeProps = this.kitCore.getThemeProps();
    this.compileTheme();
    this.modify(this.kitCore.getComponentModifiers<KitDialogTheme>('dialog'));
  }

  private compileTheme() {
    this.theme = {
      host: {
        base: {},
      }
    };
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
