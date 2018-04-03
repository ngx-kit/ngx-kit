import { ElementRef, Injectable, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { take } from 'rxjs/operators';
import { KitEventManagerService } from '../kit-event-manager/kit-event-manager.service';
import { keyTab } from '../kit-event-manager/meta';
import { KitFocusManagerRegistryService } from './kit-focus-manager-registry.service';
import { KitFocusDirective } from './kit-focus/kit-focus.directive';

@Injectable()
export class KitFocusManagerService implements OnDestroy {
  /**
   * Automatically capture focus after creating.
   */
  autoCapture = false;

  onHold = false;

  private current: HTMLElement;

  private focusTrap = false;

  private items = new Set<KitFocusDirective>();

  private outsideSource: HTMLElement;

  private unsubs: any[] = [];

  constructor(
    private el: ElementRef,
    private zone: NgZone,
    private renderer: Renderer2,
    private em: KitEventManagerService,
    private registry: KitFocusManagerRegistryService,
  ) {
  }

  private get documentActiveElement(): HTMLElement {
    return this.el.nativeElement.ownerDocument.activeElement as HTMLElement;
  }

  ngOnDestroy() {
    this.unsubs.forEach(u => u());
    if (this.outsideSource) {
      this.release();
    }
  }

  /**
   * Activate focus-trap.
   */
  capture() {
    this.registry.capture(this);
    this.focusTrap = true;
    this.outsideSource = this.documentActiveElement;
    this.focusFirst();
  }

  /**
   * Focus first focusable element.
   */
  focusFirst() {
    const nodes = this.getTabbable();
    if (nodes.length > 0) {
      nodes[0].focus();
    }
  }

  /**
   * Focus item dy id.
   */
  focusItem(id: string | number) {
    this.zone.onStable
      .pipe(take(1))
      .subscribe(() => {
        this.items.forEach(i => {
          if (i.kitFocus === id) {
            i.focus();
          }
        });
      });
  }

  /**
   * Focus last focusable element.
   */
  focusLast() {
    const nodes = this.getTabbable();
    if (nodes.length > 0) {
      nodes[nodes.length - 1].focus();
    }
  }

  /**
   * Focus next focusable element (from current focused).
   */
  focusNext() {
    const current = this.documentActiveElement;
    const nodes = this.getTabbable();
    const currentIndex = nodes.findIndex(n => n === current);
    if (currentIndex !== -1 && currentIndex < nodes.length - 1) {
      nodes[currentIndex + 1].focus();
    } else {
      this.focusFirst();
    }
  }

  /**
   * Focus prev focusable element (from currect focused).
   */
  focusPrev() {
    const current = this.documentActiveElement;
    const nodes = this.getTabbable();
    const currentIndex = nodes.findIndex(n => n === current);
    if (currentIndex !== -1 && currentIndex > 0) {
      nodes[currentIndex - 1].focus();
    } else {
      this.focusLast();
    }
  }

  /**
   * Required method for start service.
   */
  init() {
    this.zone.runOutsideAngular(() => {
      // Unsubs
      this.unsubs = [
        this.renderer.listen(this.el.nativeElement, 'focusin', this.focusinHandler.bind(this)),
        this.renderer.listen(this.el.nativeElement, 'focusout', this.focusoutHandler.bind(this)),
        this.em.listenGlobal('keydown', this.keydownHandler.bind(this), true),
      ];
    });
    if (this.autoCapture) {
      this.zone.onStable
        .pipe(take(1))
        .subscribe(() => {
          this.capture();
        });
    }
  }

  /**
   * Register item for manual focus.
   */
  add(item: KitFocusDirective) {
    this.items.add(item);
  }

  /**
   * Disable focus-trap.
   */
  release() {
    this.registry.release(this);
    this.focusTrap = false;
    this.outsideSource.focus();
  }

  /**
   * Remove item.
   */
  remove(item: KitFocusDirective) {
    this.items.delete(item);
  }

  private focusinHandler(event: FocusEvent) {
    if (!this.onHold && this.isDescendant(this.el.nativeElement, event.target as HTMLElement)) {
      this.current = event.target as HTMLElement;
    }
  }

  private focusoutHandler(event: FocusEvent) {
    if (!this.onHold && !this.isDescendant(this.el.nativeElement, event.relatedTarget as HTMLElement)) {
      if (this.focusTrap) {
        if (this.current) {
          this.current.focus();
        } else {
          this.focusFirst();
        }
      }
    }
  }

  private getTabbable(): HTMLElement[] {
    const selectors = [
      'input',
      'select',
      'a[href]',
      'textarea',
      'button',
      '[tabindex]',
    ];
    const candidates = this.el.nativeElement.querySelectorAll(selectors);
    const basicTabbables = [];
    const orderedTabbables = [];
    for (let i = 0, l = candidates.length; i < l; i++) {
      const candidate = candidates[i];
      const candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;
      if (candidateIndex < 0
        || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
        || candidate.disabled) {
        continue;
      }
      if (candidateIndex === 0) {
        basicTabbables.push(candidate);
      } else {
        orderedTabbables.push({
          index: i,
          tabIndex: candidateIndex,
          node: candidate,
        });
      }
    }
    const tabbableNodes = orderedTabbables
      .sort(function (a, b) {
        return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
      })
      .map(function (a) {
        return a.node;
      });
    Array.prototype.push.apply(tabbableNodes, basicTabbables);
    return tabbableNodes;
  }

  private isDescendant(parent: HTMLElement, child: HTMLElement): boolean {
    if (child) {
      let node = child.parentNode;
      while (node !== null) {
        if (node === parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    } else {
      return false;
    }
  }

  private keydownHandler(event: KeyboardEvent) {
    if (!this.onHold && event.keyCode === keyTab) {
      event.preventDefault();
      event.stopPropagation();
      if (event.shiftKey) {
        this.focusPrev();
      } else {
        this.focusNext();
      }
    }
  }
}
