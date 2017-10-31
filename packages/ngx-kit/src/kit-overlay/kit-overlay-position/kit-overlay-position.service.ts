import { ElementRef, Injectable, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import 'rxjs/add/operator/take';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { KitAnchorDirective } from '../../kit-common/kit-anchor/kit-anchor.directive';
import { KitStyleService } from '../../kit-common/kit-style/kit-style.service';
import { StrategyEl, StrategyField } from '../../kit-common/meta';
import { KitGlobalListenerService } from '../../kit-core/kit-global-listener.service';
import { KitPlatformService } from '../../kit-core/kit-platform.service';
import { KitOverlayAutofix, KitOverlayPosition, KitOverlayPositionDirectiveParams, KitOverlayType, } from '../meta';
import { DropdownStrategyService } from './dropdown-strategy.service';
import { SideStrategyService } from './side-strategy.service';

@Injectable()
export class KitOverlayPositionService implements OnDestroy {
  /**
   * Anchor element for placing.
   */
  anchor: KitAnchorDirective | HTMLElement;

  /**
   * Do not cross window boundaries.
   *
   * * none - do nothing
   * * move - move element to the center
   * * switch-position - change direction top-bottom / left-right
   *
   * @publicApi
   */
  autofix: KitOverlayAutofix = 'none';

  outsideClick$ = new Subject<MouseEvent>();

  position: KitOverlayPosition = 'top';

  type: KitOverlayType = 'side';

  private rawPosition = false;

  private unsubs: any[] = [];

  constructor(private renderer: Renderer2,
              private zone: NgZone,
              private el: ElementRef,
              private style: KitStyleService,
              private platform: KitPlatformService,
              private globalListener: KitGlobalListenerService,
              private dropdownStrategy: DropdownStrategyService,
              private sideStrategy: SideStrategyService) {
    if (this.platform.isBrowser()) {
      this.zone.onStable
          .take(1)
          .subscribe(() => {
            this.zone.runOutsideAngular(() => {
              // Renderer2 does not support useCapture
              this.unsubs = [
                ...this.unsubs,
                this.globalListener.listen('scroll', this.reposition.bind(this)),
                this.globalListener.listen('resize', this.reposition.bind(this)),
                this.renderer.listen('document', 'click', (event: MouseEvent) => this.clickHandler(event)),
              ];
            });
          });
      // Handle auto-fix for automatic reposition
      this.unsubs.push(this.zone.onStable
          .subscribe(() => {
            this.runAutofix();
            if (this.rawPosition) {
              this.rawPosition = false;
            }
          }));
    }
  }

  ngOnDestroy() {
    this.unsubs.forEach(l => {
      if (l instanceof Subscription) {
        l.unsubscribe();
      } else {
        l();
      }
    });
  }

  applyParams(params: Partial<KitOverlayPositionDirectiveParams>) {
    for (const param in params) {
      if (params.hasOwnProperty(param) && params[param]) {
        this[param] = params[param];
      }
    }
  }

  getRect(el: KitAnchorDirective | HTMLElement): StrategyEl {
    return this.getEl(el).getBoundingClientRect();
  }

  reposition() {
    this.zone.run(() => {
      switch (this.type) {
        case 'dropdown':
          this.repositionDropdown();
          break;
        case 'side':
          this.repositionSide();
          break;
      }
    });
  };

  private autofixDropdown() {
    const newStyles = this.dropdownStrategy.autofix(
        this.getRect(this.el.nativeElement),
        this.getRect(this.anchor),
        this.getFieldSize(),
        this.position,
        this.autofix);
    if (newStyles !== null) {
      this.style.style = newStyles;
    }
  }

  private autofixSide() {
    const newStyles = this.sideStrategy.autofix(
        this.getRect(this.el.nativeElement),
        this.getRect(this.anchor),
        this.getFieldSize(),
        this.position,
        this.autofix);
    if (newStyles !== null) {
      this.style.style = newStyles;
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

  private getEl(el: KitAnchorDirective | HTMLElement): HTMLElement {
    return el instanceof KitAnchorDirective ? el.nativeEl : el;
  }

  private getEventPath(event: Event): EventTarget[] {
    const path = [];
    if (this.platform.isBrowser()) {
      // @todo impl multi-platform
      let node = event.target;
      while (node !== document.body) {
        path.push(node);
        node = node['parentNode'];
      }
    }
    return path;
  }

  private getFieldSize(): StrategyField {
    return {
      height: window.innerHeight,
      width: window.innerWidth,
    };
  }

  private repositionDropdown() {
    this.style.style = this.dropdownStrategy.reposition(
        this.getRect(this.anchor),
        this.getFieldSize(),
        this.position);
    this.rawPosition = true;
  }

  private repositionSide() {
    this.style.style = this.sideStrategy.reposition(
        this.getRect(this.anchor),
        this.getFieldSize(),
        this.position);
    this.rawPosition = true;
  }

  private runAutofix() {
    switch (this.type) {
      case 'dropdown':
        this.autofixDropdown();
        break;
      case 'side':
        this.autofixSide();
        break;
    }
  }
}
