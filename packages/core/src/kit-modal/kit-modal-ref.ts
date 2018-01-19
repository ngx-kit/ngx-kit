import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { uuid } from '../util/uuid';

@Injectable()
export class KitModalRef<T> {
  readonly id = uuid();

  private readonly _onDestroy = new Subject<void>();

  private readonly _onClose = new Subject<void>();

  get onDestroy(): Observable<void> {
    return this._onDestroy.asObservable();
  }

  get onClose(): Observable<void> {
    return this._onClose.asObservable();
  }

  close() {
    this._onClose.next();
  }

  destroy() {
    this._onDestroy.next();
  }
}
