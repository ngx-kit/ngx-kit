import { Directive, ElementRef, Input } from '@angular/core';
import { KitAnchor } from './meta';

/**
 * Returns a reference to `elementRef` of any element.
 *
 * If you define a template reference on the element that Angular views as a host element of the component, you will
 * get a reference to the component instance. `kitAnchor` resolves the problem.
 *
 *
 * ### Usage
 *
 * ```html
 * <any-component kitAnchor #anchor="anchor"></any-component>
 * <some-other-component [anchor]="anchor"></some-other-component>
 * ```
 */
@Directive({
  selector: '[kitAnchor]',
  exportAs: 'anchor',
})
export class KitAnchorDirective implements KitAnchor {
  /**
   * @internal
   */
  @Input() kitAnchor: void;

  constructor(private _elementRef: ElementRef) {
  }

  /**
   * Get reference to anchored element.
   */
  get elementRef(): ElementRef {
    return this._elementRef;
  }

  /**
   * Get anchored html-element.
   */
  get nativeEl() {
    return this._elementRef.nativeElement;
  }
}
