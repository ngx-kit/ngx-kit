import { Injectable, ViewRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { KitOverlayComponentRef, KitOverlayInput } from '../../';
import { Partial } from '../util/util';
import { uuid } from '../util/uuid';
import { KitModalOptions } from './meta';

@Injectable()
export class KitModalRef<T> {
  /** @internal */
  readonly id = uuid();

  /** @internal */
  readonly onClose = new Subject<void>();

  /** @internal */
  readonly onDestroy = new Subject<void>();

  /** @internal */
  viewRef: ViewRef;

  /** @internal */
  componentRef: KitOverlayComponentRef<T>;

  private _params: Partial<KitModalOptions> = {};

  get params(): Partial<KitModalOptions> {
    return this._params;
  }

  set params(params: Partial<KitModalOptions>) {
    this._params = {...params};
  }

  get instance(): T {
    if (this.componentRef) {
      return this.componentRef.componentRef.instance;
    } else {
      throw new Error('Modal initiated without instance.');
    }
  }

  /** @internal */
  applyParams(params: Partial<KitModalOptions>) {
    this._params = {...this.params, ...params};
  }

  /**
   * Emit close event.
   */
  close() {
    this.onClose.next();
  }

  /**
   * Pass input to the hosted component.
   */
  input(input: KitOverlayInput) {
    if (this.componentRef) {
      this.componentRef.input(input);
    } else {
      throw new Error('Modal initiated without instance. Input could be passed programmatically only for ' +
        'service-hosted modals.');
    }
  }
}
