import { ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';
import { Partial } from '../../';

export class KitModalOptions {
  backdropClose = true;

  escClose = true;

  scrollLock = true;
}

export interface KitModalShowArgs<T> {
  component: Type<T>;
  options?: Partial<KitModalOptions>;
  componentFactoryResolver?: ComponentFactoryResolver;
  viewContainerRef?: ViewContainerRef;
}

export interface KitModalCanClose {
  canClose(): boolean;
}
