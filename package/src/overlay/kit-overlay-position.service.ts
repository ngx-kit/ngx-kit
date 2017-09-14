import { Injectable, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { KitAnchorDirective } from './kit-anchor.directive';
import { KitCoreOverlayContainerPosition } from './meta';

@Injectable()
export class KitOverlayPositionService implements OnDestroy {
  private _repositionEvent$ = new Subject<void>();

  private listeners: any[];

  constructor(private renderer: Renderer2,
              private zone: NgZone) {
    this.zone.runOutsideAngular(() => {
      this.listeners = [
        this.renderer.listen('document', 'scroll', () => this._repositionEvent$.next()),
        this.renderer.listen('window', 'resize', () => this._repositionEvent$.next()),
      ];
    });
  }

  get repositionEvent$(): Observable<void> {
    return this._repositionEvent$.asObservable();
  }

  ngOnDestroy() {
    this.listeners.forEach(l => l());
  }

  repositionDropdown(anchor: KitAnchorDirective | HTMLElement, position: KitCoreOverlayContainerPosition, widthType: 'full' | 'auto') {
    const el = this.getEl(anchor);
    const rect: ClientRect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    switch (position) {
      case 'top':
        return {
          position: 'fixed',
          top: `${Math.round(rect.top)}px`,
          left: `${Math.round(rect.left)}px`,
          transform: 'translateY(-100%)',
          width: widthType === 'full' ? `${Math.round(el.offsetWidth)}px` : null,
          maxHeight: `${rect.top - 16}px`,
          overflowY: 'auto',
        };
      case 'bottom':
        return {
          position: 'fixed',
          top: `${Math.round(rect.top + el.offsetHeight)}px`,
          left: `${Math.round(rect.left)}px`,
          width: widthType === 'full' ? `${Math.round(el.offsetWidth)}px` : null,
          maxHeight: `${windowHeight - rect.bottom - 16}px`,
          overflowY: 'auto',
        };
      case 'left':
        return {
          position: 'fixed',
          top: `${Math.round(rect.top)}px`,
          left: `${Math.round(rect.left)}px`,
        };
      case 'right':
        return {
          position: 'fixed',
          top: `${Math.round(rect.top)}px`,
          left: `${Math.round(rect.right)}px`,
        };
      default:
        throw new Error('In development!');
    }
  }

  private getEl(anchor: KitAnchorDirective | HTMLElement): HTMLElement {
    return anchor instanceof KitAnchorDirective ? anchor.nativeEl : anchor;
  }
}
