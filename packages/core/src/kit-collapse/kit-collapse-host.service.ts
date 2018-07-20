import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { KitCollapseId } from './meta';

/**
 * Controls set of collapsible items.
 *
 * Should be provided on component or directive.
 */
@Injectable()
export class KitCollapseHostService {
  multiple = false;

  private _active = new BehaviorSubject<Set<KitCollapseId>>(new Set<KitCollapseId>());

  private ids = new Set<KitCollapseId>();

  /**
   * Get `Observable` with activated items.
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
   */
  activateFirst() {
    this.activate(this.ids.values().next().value);
  }

  /**
   * Add item.
   */
  addId(id: KitCollapseId) {
    this.ids.add(id);
  }

  /**
   * Deactivate item.
   */
  deactivate(id: KitCollapseId) {
    const current = this._active.value;
    if (current.has(id)) {
      this._active.next(new Set(Array.from(current).filter(i => i !== id)));
    }
  }

  /**
   * Delete item.
   */
  deleteId(id: KitCollapseId) {
    this.ids.delete(id);
  }

  /**
   * Is item activated.
   */
  isActive(id: KitCollapseId): boolean {
    const current = this._active.value;
    return current.has(id);
  }

  /**
   * Change item activation state.
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
