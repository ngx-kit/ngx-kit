import { Directive, ElementRef, Input, } from '@angular/core';

/**
 * Anchor for passing link to element to the overlay or similar.
 */
@Directive({
  selector: '[kitAnchor]',
  exportAs: 'anchor',
})
export class KitAnchorDirective {
  @Input() kitAnchor: any;

  constructor(private elementRef: ElementRef) {
  }

  /**
   * Get anchored html-element.
   *
   * @publicApi
   */
  get nativeEl() {
    return this.elementRef.nativeElement;
  }
}
