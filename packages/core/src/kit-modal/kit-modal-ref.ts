import { Injectable, ViewRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Partial } from '../util';
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

  private _params: Partial<KitModalOptions> = {};

  get params(): Partial<KitModalOptions> {
    return this._params;
  }

  set params(params: Partial<KitModalOptions>) {
    this._params = {...params};
  }

  /** @internal */
  applyParams(params: Partial<KitModalOptions>) {
    this._params = {...this.params, ...params};
  }

  close() {
    this.onClose.next();
  }
}
