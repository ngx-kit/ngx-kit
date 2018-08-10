import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Optional } from '@angular/core';
import { KitPlatformService } from '../kit-platform/kit-platform.service';
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
    private platform: KitPlatformService,
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

  @HostListener('mousedown', ['$event']) mousedownHandler(event: any) {
    // Fix safari specific bug with blur prevention
    if (this.platform.isBrowserSafari()) {
      event.preventDefault();
    }
  }
}
