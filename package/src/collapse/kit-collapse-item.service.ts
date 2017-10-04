import { Injectable, OnDestroy } from '@angular/core';
import { uuid } from '../util/uuid';
import { KitCollapseHostService } from './kit-collapse-host.service';
import { KitCollapseId } from './meta';

@Injectable()
export class KitCollapseItemService implements OnDestroy {
  private _id: KitCollapseId;

  constructor(private host: KitCollapseHostService) {
    this.id = uuid();
  }

  set active(active: boolean) {
    if (this.active) {
      this.host.deactivate(this._id);
    } else {
      this.host.activate(this._id);
    }
  }

  get id(): KitCollapseId {
    return this._id;
  }

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

  toggle() {
    this.host.toggle(this._id);
  }
}
