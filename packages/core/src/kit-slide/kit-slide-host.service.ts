import { ChangeDetectorRef, Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { KitSlideDirection, KitSlideId } from './meta';

@Injectable()
export class KitSlideHostService {
  /**
   * Activate first slide on init.
   */
  activateFirst = true;

  private _active = new BehaviorSubject<KitSlideId>(null);

  private _direction = new BehaviorSubject<KitSlideDirection>('next');

  private firstRegistration = false;

  private ids = new Set<KitSlideId>();

  private lastId = 0;

  constructor(
    private cdr: ChangeDetectorRef,
    private zone: NgZone,
  ) {
  }

  /**
   * Get active slide id.
   */
  get active(): KitSlideId {
    return this._active.value;
  }

  /**
   * Set active side by id.
   */
  set active(id: KitSlideId) {
    this._direction.next(this._active.value === null
      ? 'initial' // no animation for init render
      : id !== null && this.getIndex(id) > this.getIndex(this._active.value)
        ? 'next'
        : 'prev');
    // run after stabilization for correct animation trigger setup
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      this._active.next(id);
    });
  }

  /**
   * Set active and emit only 'initial' direction.
   */
  set activeInitial(id: KitSlideId) {
    this._direction.next('initial');
    // run after stabilization for correct animation trigger setup
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      this._active.next(id);
    });
  }

  /**
   * Get `Observable` with active slide id.
   */
  get activeChanges(): Observable<KitSlideId> {
    return this._active.asObservable();
  }

  /**
   * Get `Observable` with direction of slide changing (next, prev).
   */
  get directionChanges(): Observable<KitSlideDirection> {
    return this._direction.asObservable();
  }

  /**
   * Register slide.
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
   */
  deleteId(id: KitSlideId) {
    this.ids.delete(id);
  }

  /**
   * Generate slide id.
   */
  genId(): number {
    this.lastId++;
    return this.lastId;
  }

  /**
   * Activate next slide.
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
   */
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
    return this.getIndex(this._active.value);
  }

  private getIndex(value: any) {
    const ids = Array.from(this.ids);
    return ids.findIndex(i => i === value);
  }
}
