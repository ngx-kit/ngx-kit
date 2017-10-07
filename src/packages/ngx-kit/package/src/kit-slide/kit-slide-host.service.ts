import { ChangeDetectorRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { KitSlideDirection, KitSlideId } from './meta';

@Injectable()
export class KitSlideHostService {
  activateFirst = true;

  private _active$ = new BehaviorSubject<KitSlideId>(null);

  private _direction$ = new BehaviorSubject<KitSlideDirection>('next');

  private firstRegistration = false;

  private ids = new Set<KitSlideId>();

  private lastId = 0;

  constructor(private cdr: ChangeDetectorRef) {
  }

  get active(): KitSlideId {
    return this._active$.value;
  }

  set active(id: KitSlideId) {
    this._direction$.next(this._active$.value === null
        ? 'initial' // no animation for init render
        : id !== null && id > this._active$.value
            ? 'prev'
            : 'next');
    // timeout for right animation trigger setup
    setTimeout(() => {
      this._active$.next(id);
      this.cdr.markForCheck();
    }, 1);
  }

  get active$(): Observable<KitSlideId> {
    return this._active$.asObservable();
  }

  get direction$(): Observable<KitSlideDirection> {
    return this._direction$.asObservable();
  }

  addId(id: KitSlideId) {
    if (!this.firstRegistration) {
      this.firstRegistration = true;
      if (this.activateFirst) {
        this.active = id;
      }
    }
    this.ids.add(id);
  }

  deleteId(id: KitSlideId) {
    this.ids.delete(id);
  }

  genId(): number {
    this.lastId++;
    return this.lastId;
  }

  next() {
    const ids = Array.from(this.ids);
    const currentIndex = this.getCurrentIndex();
    if (currentIndex < ids.length - 1) {
      this.active = currentIndex + 1;
    }
  }

  prev() {
    const currentIndex = this.getCurrentIndex();
    if (currentIndex > 0) {
      this.active = currentIndex - 1;
    }
  }

  /**
   * Activate next item or first.
   */
  rotate() {
    const ids = Array.from(this.ids);
    const currentIndex = this.getCurrentIndex();
    const newIndex = currentIndex < ids.length - 1
        ? currentIndex + 1
        : 0;
    this.active = ids[newIndex];
  }

  private getCurrentIndex() {
    const ids = Array.from(this.ids);
    const current = this._active$.value;
    return ids.findIndex(i => i === current);
  }
}
