import { Injectable, ViewRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Partial } from '../util';
import { uuid } from '../util/uuid';
import { KitModalParams } from './meta';

@Injectable()
export class KitModalRef<T> {
  readonly id = uuid();

  viewRef: ViewRef;

  private _params: Partial<KitModalParams> = {};

  private readonly _onDestroy = new Subject<void>();

  private readonly _onClose = new Subject<void>();

  get onDestroy(): Observable<void> {
    return this._onDestroy.asObservable();
  }

  get onClose(): Observable<void> {
    return this._onClose.asObservable();
  }

  get params(): Partial<KitModalParams> {
    return this._params;
  }

  set params(params: Partial<KitModalParams>) {
    this._params = {...this.params, ...params};
  }

  close() {
    this._onClose.next();
  }

  destroy() {
    this._onDestroy.next();
  }
}
