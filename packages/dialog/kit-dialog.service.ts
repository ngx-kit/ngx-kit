import {
  ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector,
  Type
} from '@angular/core';

import { KitComponentService, KitCoreService, KitThemeProps } from '@ngx-kit/core';

import { KitDialogTheme, DialogHandlers } from './interfaces';

@Injectable()
export class KitDialogService extends KitComponentService<KitDialogTheme> {

  private themeProps: KitThemeProps;
  private dialogRef: ComponentRef<any>;
  private rootRef: ComponentRef<any>;

  constructor(private kitCore: KitCoreService,
              private resolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private injector: Injector) {
    super();
    // theming
    this.themeProps = this.kitCore.getThemeProps();
    this.compileTheme();
    this.modify(this.kitCore.getComponentModifiers<KitDialogTheme>('dialog'));
  }

  private compileTheme() {
    this.theme = {
      host: {
        base: {
        },
      }
    };
  }

  /**
   * Create element into root container.
   *
   * @param component
   * @return {ComponentRef<T>}
   */
  private create<T>(component: Type<T>): ComponentRef<T> {
    this.detectRoot();
    const factory = this.resolver.resolveComponentFactory(component);
    console.log('factory', factory);
    const componentRef = factory.create(this.injector);
    console.log('componentRef:hv', componentRef.hostView);
    console.log('componentRef', componentRef);
    this.applicationRef.attachView(componentRef.hostView);
    (this.rootRef.hostView as EmbeddedViewRef<any>).rootNodes[0].appendChild((componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0]);
    return componentRef;
  }

  show<T extends DialogHandlers>(component: Type<T>): T {
    let modalRef: ComponentRef<T> = this.create<T>(component);
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

  private detectRoot() {
    if (!this.rootRef) {
      this.rootRef = this.applicationRef['_rootComponents'][0];
      console.log('rR', this.rootRef, this.applicationRef);
    }
  }

}
