import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { KitCollapseId } from './meta';

@Injectable()
export class KitCollapseHostService {
  multiple = false;

  private _active$ = new BehaviorSubject<Set<KitCollapseId>>(new Set<KitCollapseId>());

  private ids = new Set<KitCollapseId>();

  get active$(): Observable<Set<KitCollapseId>> {
    return this._active$.asObservable();
  }

  activate(id: KitCollapseId) {
    const current = this._active$.value;
    if (!current.has(id)) {
      if (this.multiple) {
        this._active$.next(new Set(current).add(id));
      } else {
        this._active$.next(new Set().add(id));
      }
    }
  }

  /**
   * Activate first registered item
   */
  activateFirst() {
    this.activate(this.ids.values().next().value);
  }

  addId(id: KitCollapseId) {
    this.ids.add(id);
  }

  deactivate(id: KitCollapseId) {
    const current = this._active$.value;
    if (current.has(id)) {
      this._active$.next(new Set(Array.from(current).filter(i => i !== id)));
    }
  }

  deleteId(id: KitCollapseId) {
    this.ids.delete(id);
  }

  toggle(id: KitCollapseId) {
    const current = this._active$.value;
    if (current.has(id)) {
      this.deactivate(id);
    } else {
      this.activate(id);
    }
  }
}
