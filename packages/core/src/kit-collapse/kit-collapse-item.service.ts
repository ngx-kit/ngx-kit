import { Injectable, OnDestroy } from '@angular/core';
import { uuid } from '../kit-util/uuid';
import { KitCollapseHostService } from './kit-collapse-host.service';
import { KitCollapseId } from './meta';

@Injectable()
export class KitCollapseItemService implements OnDestroy {
  private _id: KitCollapseId;

  constructor(private host: KitCollapseHostService) {
    this.id = uuid();
  }

  /**
   * Is item activated.
   *
   * @publicApi
   */
  get active(): boolean {
    return this.host.isActive(this.id);
  }

  /**
   * Set activation state.
   *
   * @publicApi
   */
  set active(active: boolean) {
    if (this.active) {
      this.host.deactivate(this._id);
    } else {
      this.host.activate(this._id);
    }
  }

  /**
   * Get item id.
   *
   * @publicApi
   */
  get id(): KitCollapseId {
    return this._id;
  }

  /**
   * Set item id.
   *
   * @publicApi
   */
  set id(id: KitCollapseId) {
    if (id) {
      this.host.deleteId(this._id);
      this.host.addId(id);
      this._id = id;
    } else {
      throw new Error('id is empty');
    }
  }

  ngOnDestroy() {
    this.host.deleteId(this._id);
  }

  /**
   * Toggle activation state.
   *
   * @publicApi
   */
  toggle() {
    this.host.toggle(this._id);
  }
}
