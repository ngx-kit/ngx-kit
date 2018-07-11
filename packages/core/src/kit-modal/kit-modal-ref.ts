import { Injectable, ViewRef } from '@angular/core';
import { Subject } from 'rxjs';
import { KitOverlayComponentRef, KitOverlayInput } from '../../';
import { Partial } from '../util/util';
import { uuid } from '../util/uuid';
import { KitModalOptions } from './meta';

@Injectable()
export class KitModalRef<T> {
  /** @internal */
  readonly id = uuid();

  readonly onClose = new Subject<void>();

  readonly onDestroy = new Subject<void>();

  /** @internal */
  viewRef: ViewRef;

  /** @internal */
  componentRef: KitOverlayComponentRef<T>;

  private _options: Partial<KitModalOptions> = {};

  get options(): Partial<KitModalOptions> {
    return this._options;
  }

  set options(options: Partial<KitModalOptions>) {
    this._options = {...options};
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
    this._options = {...this.options, ...params};
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
  input(input: KitOverlayInput<T>) {
    if (this.componentRef) {
      this.componentRef.input(input);
    } else {
      throw new Error('Modal initiated without instance. Input could be passed programmatically only for ' +
        'service-hosted modals.');
    }
  }
}
