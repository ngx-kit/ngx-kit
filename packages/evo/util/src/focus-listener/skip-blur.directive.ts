import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Optional } from '@angular/core';
import { FocusListener } from './focus-listener';

/**
 * Registers element in `KitFocusListener` to avoid emitting blur if focus moves to the current element.
 *
 * Important when you use `*kitOverlay`, because items are placed in overlay-container outside of a current component.
 */
@Directive({
  selector: '[evoSkipBlur]',
})
export class SkipBlurDirective implements OnInit, OnDestroy {
  @Input() kitSkipBlur: void;

  constructor(
    @Optional() private focusListener: FocusListener,
    private elementRef: ElementRef,
    private platform: Platform,
  ) {
    if (!this.focusListener) {
      throw new Error(`SkipBlurDirective: should be used under KitFocusListenerService, provide it in a parent component at any level.`);
    }
  }

  ngOnInit() {
    this.focusListener.add(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.focusListener.remove(this.elementRef.nativeElement);
  }

  @HostListener('mousedown', ['$event']) mousedownHandler(event: any) {
    // Fix safari specific bug with blur prevention
    if (this.platform.SAFARI) {
      event.preventDefault();
    }
  }
}
