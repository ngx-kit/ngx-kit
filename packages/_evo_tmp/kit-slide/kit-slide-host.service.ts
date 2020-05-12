import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { KitSlideDirection, KitSlideId } from './meta';

/**
 * @todo make internal
 *
 * ### Usage
 *
 * Provide `KitSlideHostService` on a component and add `*kitSlide` to slides.
 *
 * ```html
 * <div (click)="rotate()">
 *   <div *kitSlide>Slide 1</div>
 *   <div *kitSlide>Slide 2</div>
 *   <div *kitSlide>Slide 3</div>
 * </div>
 * ```
 *
 * Use `KitSlideHostService` for state changing.
 *
 * ```typescript
 * providers[KitSlideHostService],
 * ...
 * constructor(private slideHost: KitSlideHostService) {
 * }
 * ...
 * rotate() {
 *   this.slideHost.rotate();
 * }
 * ```
 *
 *
 * ### Example
 *
 * * collection:carousel -
 * [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-carousel),
 * [demo](http://ngx-kit.com/collection/module/ui-carousel)
 * * collection:tabs - [sources](https://github.com/ngx-kit/ngx-kit/tree/master/packages/collection/lib/ui-tabs),
 * [demo](http://ngx-kit.com/collection/module/ui-tabs)
 */
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
  next(cycle = false) {
    const ids = Array.from(this.ids);
    const currentIndex = this.getCurrentIndex();
    if (currentIndex < ids.length - 1) {
      this.active = ids[currentIndex + 1];
    } else if (cycle) {
      this.active = ids[0];
    }
  }

  /**
   * Activate prev slide.
   */
  prev(cycle = false) {
    const ids = Array.from(this.ids);
    const currentIndex = this.getCurrentIndex();
    if (currentIndex > 0) {
      this.active = ids[currentIndex - 1];
    } else if (cycle) {
      this.active = ids[ids.length - 1];
    }
  }

  private getCurrentIndex() {
    return this.getIndex(this._active.value);
  }

  private getIndex(value: any) {
    const ids = Array.from(this.ids);
    return ids.findIndex(i => i === value);
  }
}
