import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { take } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { KitPlatformService } from '../../kit-platform/kit-platform.service';
import { KitAnchorDirective } from '../../kit-common/kit-anchor/kit-anchor.directive';
import { KitStyleService } from '../../kit-common/kit-style/kit-style.service';
import { StrategyEl, StrategyField } from '../../kit-common/meta';
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
   * * switch-position - change direction top-bottom / left-right
   *
   * @publicApi
   */
  autofix: KitOverlayAutofix = 'switch-position';

  outsideClick$ = new Subject<MouseEvent>();

  position: KitOverlayPosition = 'top';

  type: KitOverlayType = 'side';

  private rawPosition = false;

  private unsubs: any[] = [];

  constructor(private zone: NgZone,
              private el: ElementRef,
              private style: KitStyleService,
              private platform: KitPlatformService,
              private em: EventManager,
              private dropdownStrategy: DropdownStrategyService,
              private sideStrategy: SideStrategyService) {
    if (this.platform.isBrowser()) {
      this.zone.onStable
          .pipe(take(1))
          .subscribe(() => {
            this.zone.runOutsideAngular(() => {
              this.unsubs = [
                ...this.unsubs,
                this.em.addGlobalEventListener('window', 'scroll', this.reposition.bind(this)),
                this.em.addGlobalEventListener('window', 'resize', this.reposition.bind(this)),
                this.em.addGlobalEventListener('document', 'click',
                    (event: MouseEvent) => this.clickHandler(event)),
              ];
            });
          });
      // Handle auto-fix for automatic reposition
      this.unsubs.push(this.zone.onStable
          .subscribe(() => {
            if (this.rawPosition) {
              this.rawPosition = false;
              this.runAutofix();
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
      this.style.style = newStyles.styles;
    }
  }

  private autofixSide(lastPosition: KitOverlayPosition | null = null) {
    const newStyles = this.sideStrategy.autofix(
        this.getRect(this.el.nativeElement),
        this.getRect(this.anchor),
        this.getFieldSize(),
        lastPosition || this.position,
        this.autofix);
    if (newStyles !== null && lastPosition !== newStyles.position) {
      this.style.style = newStyles.styles;
      // Additional reposition if last position changed
      this.autofixSide(newStyles.position);
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
    this.rawPosition = true;
    this.style.style = this.dropdownStrategy.reposition(
        this.getRect(this.anchor),
        this.getFieldSize(),
        this.position);
  }

  private repositionSide() {
    this.rawPosition = true;
    this.style.style = this.sideStrategy.reposition(
        this.getRect(this.anchor),
        this.getFieldSize(),
        this.position);
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
