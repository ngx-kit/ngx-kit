import { Directive, ElementRef, Input, OnDestroy, OnInit, Optional } from '@angular/core';
import { KitFocusListenerService } from './kit-focus-listener.service';

/**
 * Registers element in `KitFocusListener` to avoid emitting blur if focus moves to the current element.
 */
@Directive({
  selector: '[kitSkipBlur]',
})
export class KitSkipBlurDirective implements OnInit, OnDestroy {
  @Input() kitSkipBlur: void;

  constructor(
    @Optional() private focusListener: KitFocusListenerService,
    private elementRef: ElementRef,
  ) {
    if (!this.focusListener) {
      throw new Error(`KitSkipBlurDirective: should be used under KitFocusListenerService, provide it in a parent component at any level.`);
    }
  }

  ngOnInit() {
    this.focusListener.add(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.focusListener.remove(this.elementRef.nativeElement);
  }
}
