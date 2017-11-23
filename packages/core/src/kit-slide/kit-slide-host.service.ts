import { ChangeDetectorRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { KitSlideDirection, KitSlideId } from './meta';

@Injectable()
export class KitSlideHostService {
  /**
   * Activate first slide on init.
   *
   * @publicApi
   */
  activateFirst = true;

  private _active = new BehaviorSubject<KitSlideId>(null);

  private _direction = new BehaviorSubject<KitSlideDirection>('next');

  private firstRegistration = false;

  private ids = new Set<KitSlideId>();

  private lastId = 0;

  constructor(private cdr: ChangeDetectorRef) {
  }

  /**
   * Get active slide id.
   *
   * @publicApi
   */
  get active(): KitSlideId {
    return this._active.value;
  }

  /**
   * Set active side by id.
   *
   * @publicApi
   */
  set active(id: KitSlideId) {
    this._direction.next(this._active.value === null
        ? 'initial' // no animation for init render
        : id !== null && id > this._active.value
            ? 'prev'
            : 'next');
    // timeout for right animation trigger setup
    setTimeout(() => {
      this._active.next(id);
      this.cdr.markForCheck();
    }, 1);
  }

  /**
   * Get `Observable` with active slide id.
   *
   * @publicApi
   */
  get activeChanges(): Observable<KitSlideId> {
    return this._active.asObservable();
  }

  /**
   * Get `Observable` with direction of slide changing (next, prev).
   *
   * @publicApi
   */
  get directionChanges(): Observable<KitSlideDirection> {
    return this._direction.asObservable();
  }

  /**
   * Register slide.
   *
   * @publicApi
   */
  addId(id: KitSlideId) {
    if (!this.firstRegistration) {
      this.firstRegistration = true;
      if (this.activateFirst) {
        this.active = id;
      }
    }
    this.ids.add(id);
  }

  /**
   * Delete slide.
   *
   * @publicApi
   */
  deleteId(id: KitSlideId) {
    this.ids.delete(id);
  }

  /**
   * Generate slide id.
   *
   * @publicApi
   */
  genId(): number {
    this.lastId++;
    return this.lastId;
  }

  /**
   * Activate next slide.
   *
   * @publicApi
   */
  next() {
    const ids = Array.from(this.ids);
    const currentIndex = this.getCurrentIndex();
    if (currentIndex < ids.length - 1) {
      this.active = currentIndex + 1;
    }
  }

  /**
   * Activate prev slide.
   *
   * @publicApi
   */
  prev() {
    const currentIndex = this.getCurrentIndex();
    if (currentIndex > 0) {
      this.active = currentIndex - 1;
    }
  }

  /**
   * Activate next item or first.
   *
   * @publicApi
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
    const current = this._active.value;
    return ids.findIndex(i => i === current);
  }
}
