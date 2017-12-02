import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { KitCollapseId } from './meta';

@Injectable()
export class KitCollapseHostService {
  /**
   * @publicApi
   */
  multiple = false;

  private _active = new BehaviorSubject<Set<KitCollapseId>>(new Set<KitCollapseId>());

  private ids = new Set<KitCollapseId>();

  /**
   * Get `Observable` with activated items.
   *
   * @publicApi
   */
  get activeChanges(): Observable<Set<KitCollapseId>> {
    return this._active.asObservable();
  }

  /**
   * Get Set with activated items.
   */
  get active(): Set<KitCollapseId> {
    return new Set(this._active.value);
  }

  /**
   * Activate item with id.
   *
   * @publicApi
   */
  activate(id: KitCollapseId) {
    const current = this._active.value;
    if (!current.has(id)) {
      if (this.multiple) {
        this._active.next(new Set(current).add(id));
      } else {
        this._active.next(new Set().add(id));
      }
    }
  }

  /**
   * Activate first registered item.
   *
   * @publicApi
   */
  activateFirst() {
    this.activate(this.ids.values().next().value);
  }

  /**
   * Add item.
   *
   * @publicApi
   */
  addId(id: KitCollapseId) {
    this.ids.add(id);
  }

  /**
   * Deactivate item.
   *
   * @publicApi
   */
  deactivate(id: KitCollapseId) {
    const current = this._active.value;
    if (current.has(id)) {
      this._active.next(new Set(Array.from(current).filter(i => i !== id)));
    }
  }

  /**
   * Delete item.
   *
   * @publicApi
   */
  deleteId(id: KitCollapseId) {
    this.ids.delete(id);
  }

  /**
   * Is item activated.
   *
   * @publicApi
   */
  isActive(id: KitCollapseId): boolean {
    const current = this._active.value;
    return current.has(id);
  }

  /**
   * Change item activation state.
   *
   * @publicApi
   */
  toggle(id: KitCollapseId) {
    const current = this._active.value;
    if (current.has(id)) {
      this.deactivate(id);
    } else {
      this.activate(id);
    }
  }
}
