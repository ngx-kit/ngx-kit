import { Injectable, OnDestroy } from '@angular/core';
import { evoUuid } from '@ngx-kit/evo/util/src/uuid/evo-uuid';
import { KitCollapseHostService } from './kit-collapse-host.service';
import { KitCollapseId } from './meta';

/**
 * @todo make internal
 *
 * Controls state of a collapsible item.
 *
 * Should be provided on component or directive.
 */
@Injectable()
export class KitCollapseItemService implements OnDestroy {
  private _id: KitCollapseId;

  constructor(private host: KitCollapseHostService) {
    this.id = evoUuid();
  }

  /**
   * Is item activated.
   */
  get active(): boolean {
    return this.host.isActive(this._id);
  }

  /**
   * Set activation state.
   */
  set active(active: boolean) {
    if (active) {
      this.host.activate(this._id);
    } else {
      this.host.deactivate(this._id);
    }
  }

  /**
   * Get item id.
   */
  get id(): KitCollapseId {
    return this._id;
  }

  /**
   * Set item id.
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
   */
  toggle() {
    this.host.toggle(this._id);
  }
}
