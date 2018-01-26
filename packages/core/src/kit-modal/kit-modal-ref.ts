import { EventEmitter, Injectable, SimpleChange, SimpleChanges, ViewRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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

  /** @internal */
  instance: T;

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

  input(name: string, value: any) {
    if (this.instance) {
      const prev = this.instance[name];
      this.instance[name] = value;
      if (this.instance['ngOnChanges']) {
        const changes: SimpleChanges = {[name]: new SimpleChange(prev, value, false)};
        this.instance['ngOnChanges'](changes);
      }
      this.viewRef.markForCheck();
    } else {
      throw new Error('Modal initiated without instance. Input could be passed programmatically only for ' +
        'service-hosted modals.');
    }
  }

  output<R>(name: string): Observable<R> {
    if (this.instance) {
      const output: EventEmitter<R> = this.instance[name];
      if (output) {
        return output.asObservable();
      } else {
        throw new Error(`Output "${name}" not declared!`);
      }
    } else {
      throw new Error('Modal initiated without instance. Output could be provided only for ' +
        'service-hosted modals.');
    }
  }
}
