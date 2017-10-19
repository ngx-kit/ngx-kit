import { ElementRef, Injectable, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import 'rxjs/add/operator/take';
import { keyTab } from '../meta';
import { KitFocusDirective } from './kit-focus.directive';

@Injectable()
export class KitFocusManagerService implements OnDestroy {
  autoCapture = false;

  handleKey = (event: KeyboardEvent) => {
    if (event.keyCode === keyTab) {
      event.preventDefault();
      event.stopPropagation();
      if (event.shiftKey) {
        this.focusPrev();
      } else {
        this.focusNext();
      }
    }
  };

  private current: HTMLElement;

  private focusTrap = false;

  private items = new Set<KitFocusDirective>();

  private outsideSource: HTMLElement;

  private unsubs: any[];

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              private zone: NgZone) {
  }

  ngOnDestroy() {
    this.unsubs.forEach(u => u());
    if (this.outsideSource) {
      this.release();
    }
  }

  capture() {
    this.focusTrap = true;
    this.outsideSource = document.activeElement as HTMLElement;
    this.focusFirst();
  }

  focusFirst() {
    const nodes = this.getTabbable();
    if (nodes.length > 0) {
      nodes[0].focus();
    }
  }

  focusItem(id: string | number) {
    this.zone.onStable.take(1).subscribe(() => {
      this.items.forEach(i => {
        if (i.kitFocus === id) {
          i.focus();
        }
      });
    })
  }

  focusLast() {
    const nodes = this.getTabbable();
    if (nodes.length > 0) {
      nodes[nodes.length - 1].focus();
    }
  }

  focusNext() {
    const current = document.activeElement as HTMLElement;
    const nodes = this.getTabbable();
    const currentIndex = nodes.findIndex(n => n === current);
    if (currentIndex !== -1 && currentIndex < nodes.length - 1) {
      nodes[currentIndex + 1].focus();
    } else {
      this.focusFirst();
    }
  }

  focusPrev() {
    const current = document.activeElement as HTMLElement;
    const nodes = this.getTabbable();
    const currentIndex = nodes.findIndex(n => n === current);
    if (currentIndex !== -1 && currentIndex > 0) {
      nodes[currentIndex - 1].focus();
    } else {
      this.focusLast();
    }
  }

  init() {
    this.zone.runOutsideAngular(() => {
      const focusinUnsub = this.renderer.listen(this.el.nativeElement, 'focusin', (event: FocusEvent) => {
        if (this.isDescendant(this.el.nativeElement, event.target as HTMLElement)) {
          this.current = event.target as HTMLElement;
        }
      });
      const focusoutUnsub = this.renderer.listen(this.el.nativeElement, 'focusout', (event: FocusEvent) => {
        if (!this.isDescendant(this.el.nativeElement, event.relatedTarget as HTMLElement)) {
          if (this.focusTrap) {
            if (this.current) {
              this.current.focus();
            } else {
              this.focusFirst();
            }
          }
        }
      });
      // Renderer2 does not support useCapture
      document.addEventListener('keydown', this.handleKey, true);
      // Unsubs
      this.unsubs = [
        () => document.removeEventListener('keydown', this.handleKey, true),
        focusinUnsub,
        focusoutUnsub,
      ];
    });
    if (this.autoCapture) {
      this.zone.onStable
          .take(1)
          .subscribe(() => {
            this.capture();
          });
    }
  }

  register(item: KitFocusDirective) {
    this.items.add(item);
  }

  release() {
    this.focusTrap = false;
    this.outsideSource.focus();
  }

  remove(item: KitFocusDirective) {
    this.items.delete(item);
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
          return a.node
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
}
