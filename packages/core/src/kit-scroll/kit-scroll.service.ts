import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { KitHammerTypes } from '../kit-hammer/meta';
import { KitHammerService } from '../kit-hammer/kit-hammer.service';
import { KitPlatformService } from '../kit-platform/kit-platform.service';
import { KitScrollRefs, KitScrollState } from './meta';

/**
 * Scroll area helpers.
 * Should be provided on component.
 */
@Injectable()
export class KitScrollService implements OnDestroy {
  refs: KitScrollRefs;

  private _state = new BehaviorSubject<KitScrollState>({
    nativeScrollbarWidth: 0,
    dragging: false,
    vBar: {
      active: false,
      size: 0,
      position: 0,
    },
    hBar: {
      active: false,
      size: 0,
      position: 0,
    },
  });

  private mutationObserver: MutationObserver;

  constructor(
    private platform: KitPlatformService,
    private elRef: ElementRef,
    private hammer: KitHammerService,
  ) {
    this._state.next({
      ...this.state,
      nativeScrollbarWidth: this.platform.getScrollbarWidth(),
    });
  }

  get state(): KitScrollState {
    return this._state.value;
  }

  get stateChanges(): Observable<KitScrollState> {
    return this._state.asObservable();
  }

  ngOnDestroy() {
    this.mutationObserver.disconnect();
  }

  registerRefs(refs: KitScrollRefs) {
    this.refs = refs;
    this.initVListeners();
    this.initHListeners();
    this.initMutationObserver();
  }

  update() {
    this.updateVBar();
    this.updateHBar();
  }

  updateVBar() {
    const state = this.calcBar(
      this.refs.vWrapper.scrollHeight - this.state.nativeScrollbarWidth,
      this.elRef.nativeElement.offsetHeight,
      this.refs.vBarWrapper.offsetHeight,
      this.refs.vWrapper.scrollTop,
    );
    this._state.next({
      ...this.state,
      vBar: state,
    });
  }

  updateHBar() {
    const state = this.calcBar(
      this.refs.hWrapper.scrollWidth,
      this.elRef.nativeElement.offsetWidth,
      this.refs.hBarWrapper.offsetWidth,
      this.refs.hWrapper.scrollLeft,
    );
    this._state.next({
      ...this.state,
      hBar: state,
    });
  }

  private calcBar(contentSize: number, hostSize: number, barWrapperSize: number, scrollPosition: number) {
    if (contentSize > hostSize) {
      const size = Math.round(Math.max((hostSize / contentSize) * barWrapperSize, 30));
      return {
        active: true,
        size,
        position: Math.round((barWrapperSize - size) * (scrollPosition / (contentSize - hostSize))),
      };
    } else {
      return {
        active: false,
        size: 0,
        position: 0,
      };
    }
  }

  private initVListeners() {
    const vBarHammer = this.hammer.build(this.refs.vBar, {
      pan: {
        direction: KitHammerTypes.DIRECTION_VERTICAL,
        threshold: 1,
      },
    });
    let scrollStart: number | null = null;
    // Pan
    vBarHammer.on('pan', (event: any) => {
      // Start
      if (scrollStart === null) {
        scrollStart = this.refs.vWrapper.scrollTop;
        this._state.next({
          ...this.state,
          dragging: true,
        });
      }
      // Calc
      const contentHeight = this.refs.hWrapper.scrollHeight;
      const hostHeight = this.elRef.nativeElement.offsetHeight;
      const coef = contentHeight / hostHeight;
      if (scrollStart !== null) {
        this.refs.vWrapper.scrollTop = Math.round(scrollStart + event.deltaY * coef);
      }
      // Final
      if (event.isFinal) {
        scrollStart = null;
        this._state.next({
          ...this.state,
          dragging: false,
        });
      }
    });
    // Tap
    const vBarWrapperHammer = this.hammer.build(this.refs.vBarWrapper);
    vBarWrapperHammer.on('tap', (event: any) => {
      if (event.target === this.refs.vBarWrapper) {
        const pos = this.hammer.calcRelatedPosition(this.refs.vBarWrapper, event.center);
        // Calc
        this.refs.vWrapper.scrollTop += pos.y > this.state.vBar.position ? 200 : -200;
      }
    });
  }

  private initHListeners() {
    const hBarHammer = this.hammer.build(this.refs.hBar, {
      pan: {
        direction: KitHammerTypes.DIRECTION_HORIZONTAL,
        threshold: 1,
      },
    });
    let scrollStart: number | null = null;
    // Pan
    hBarHammer.on('pan', (event: any) => {
      // Start
      if (scrollStart === null) {
        scrollStart = this.refs.hWrapper.scrollLeft;
        this._state.next({
          ...this.state,
          dragging: true,
        });
      }
      // Calc
      const contentWidth = this.refs.hWrapper.scrollWidth;
      const hostWidth = this.elRef.nativeElement.offsetWidth;
      const coef = contentWidth / hostWidth;
      if (scrollStart !== null) {
        this.refs.hWrapper.scrollLeft = Math.round(scrollStart + event.deltaX * coef);
      }
      // Final
      if (event.isFinal) {
        scrollStart = null;
        this._state.next({
          ...this.state,
          dragging: false,
        });
      }
    });
    // Tap
    const hBarWrapperHammer = this.hammer.build(this.refs.hBarWrapper);
    hBarWrapperHammer.on('tap', (event: any) => {
      if (event.target === this.refs.hBarWrapper) {
        const pos = this.hammer.calcRelatedPosition(this.refs.hBarWrapper, event.center);
        // Calc
        this.refs.hWrapper.scrollLeft += pos.x > this.state.hBar.position ? 200 : -200;
      }
    });
  }

  private initMutationObserver() {
    this.mutationObserver = new MutationObserver(mutations => {
      if (mutations.length > 0) {
        this.update();
      }
    });
    this.mutationObserver.observe(this.refs.hWrapper, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });
  }
}
