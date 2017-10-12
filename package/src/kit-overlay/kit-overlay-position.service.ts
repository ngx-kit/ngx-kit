import { ElementRef, Injectable, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { KitAnchorDirective } from '../kit-common/kit-anchor/kit-anchor.directive';
import { KitStyleService } from '../kit-common/kit-style/kit-style.service';
import {
  KitCoreOverlayContainerPosition,
  KitCoreOverlayContainerType,
  KitOverlayPositionDirectiveParams,
} from './meta';

@Injectable()
export class KitOverlayPositionService implements OnDestroy {
  anchor: KitAnchorDirective | HTMLElement;

  outsideClick$ = new Subject<MouseEvent>();

  position: KitCoreOverlayContainerPosition = 'top';

  type: KitCoreOverlayContainerType = 'side';

  widthType: 'full' | 'auto' = 'auto';

  private _repositionEvent$ = new Subject<void>();

  private listeners: any[];

  constructor(private renderer: Renderer2,
              private zone: NgZone,
              private el: ElementRef,
              private style: KitStyleService) {
    this.zone.runOutsideAngular(() => {
      this.listeners = [
        this.renderer.listen('document', 'scroll', () => this._repositionEvent$.next()),
        this.renderer.listen('window', 'resize', () => this._repositionEvent$.next()),
        this.renderer.listen('document', 'click', (event: MouseEvent) => this.clickHandler(event)),
      ];
    });
    this._repositionEvent$.subscribe(() => {
      this.reposition();
    })
  }

  get repositionEvent$(): Observable<void> {
    return this._repositionEvent$.asObservable();
  }

  ngOnDestroy() {
    this.listeners.forEach(l => l());
  }

  applyParams(params: Partial<KitOverlayPositionDirectiveParams>) {
    for (const param in params) {
      if (params.hasOwnProperty(param) && params[param]) {
        this[param] = params[param];
      }
    }
  }

  reposition() {
    switch (this.type) {
      case 'dropdown':
        this.repositionDropdown();
        break;
      case 'side':
        this.repositionSide();
        break;
    }
  }

  private clickHandler(event: MouseEvent) {
    this.zone.run(() => {
      const path = event['path'] || this.getEventPath(event);
      if (path.indexOf(this.getEl(this.anchor)) === -1 && path.indexOf(this.el.nativeElement) === -1) {
        this.zone.run(() => {
          this.outsideClick$.next(event);
        });
      }
    });
  }

  private getEl(anchor: KitAnchorDirective | HTMLElement): HTMLElement {
    return anchor instanceof KitAnchorDirective ? anchor.nativeEl : anchor;
  }

  private getEventPath(event: Event): EventTarget[] {
    const path = [];
    let node = event.target;
    while (node !== document.body) {
      path.push(node);
      node = node['parentNode'];
    }
    return path;
  }

  private repositionDropdown() {
    const el = this.getEl(this.anchor);
    const rect: ClientRect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    switch (this.position) {
      case 'top':
        this.style.style = {
          position: 'fixed',
          top: `${Math.round(rect.top)}px`,
          left: `${Math.round(rect.left)}px`,
          transform: 'translateY(-100%)',
          width: this.widthType === 'full' ? `${Math.round(el.offsetWidth)}px` : 'auto',
          maxHeight: `${rect.top - 16}px`,
          overflowY: 'auto',
        };
        break;
      case 'bottom':
        this.style.style = {
          position: 'fixed',
          top: `${Math.round(rect.top + el.offsetHeight)}px`,
          left: `${Math.round(rect.left)}px`,
          width: this.widthType === 'full' ? `${Math.round(el.offsetWidth)}px` : 'auto',
          maxHeight: `${windowHeight - rect.bottom - 16}px`,
          overflowY: 'auto',
        };
        break;
      case 'left':
        this.style.style = {
          position: 'fixed',
          top: `${Math.round(rect.top)}px`,
          left: `${Math.round(rect.left)}px`,
        };
        break;
      case 'right':
        this.style.style = {
          position: 'fixed',
          top: `${Math.round(rect.top)}px`,
          left: `${Math.round(rect.right)}px`,
        };
        break;
      default:
        throw new Error('In development!');
    }
  }

  private repositionSide() {
    const el = this.getEl(this.anchor);
    const rect: ClientRect = el.getBoundingClientRect();
    switch (this.position) {
      case 'top':
        this.style.style = {
          position: 'fixed',
          top: `${Math.round(rect.top)}px`,
          left: `${Math.round(rect.left + el.offsetWidth / 2)}px`,
          transform: 'translateX(-50%) translateY(-100%)',
        };
        break;
      case 'bottom':
        this.style.style = {
          position: 'fixed',
          top: `${Math.round(rect.bottom)}px`,
          left: `${Math.round(rect.left + el.offsetWidth / 2)}px`,
          transform: 'translateX(-50%)',
        };
        break;
      case 'left':
        this.style.style = {
          position: 'fixed',
          top: `${Math.round(rect.top + el.offsetHeight / 2)}px`,
          left: `${Math.round(rect.left)}px`,
          transform: 'translateX(-100%) translateY(-50%)',
        };
        break;
      case 'right':
        this.style.style = {
          position: 'fixed',
          top: `${Math.round(rect.top + el.offsetHeight / 2)}px`,
          left: `${Math.round(rect.right)}px`,
          transform: 'translateY(-50%)',
        };
        break;
      default:
        throw new Error('In development!');
    }
  }
}
