import { Directive, EventEmitter, OnInit, Output } from '@angular/core';
import { Intersection } from './evo-intersection.service';

/**
 * Observe viewport intersection.
 *
 *
 * ### Usage
 *
 * And listen to intersection changes:
 *
 * ```html
 * <div (kitIntersection)="visible = $event">
 * </div>
 * ```
 */
@Directive({
  selector: '[evoIntersection]',
  providers: [
    Intersection,
  ],
})
export class EvoIntersectionDirective implements OnInit {
  @Output() kitIntersection = new EventEmitter<boolean>();

  constructor(
    private intersection: Intersection,
  ) {
  }

  ngOnInit() {
    this.intersection.observe().subscribe(isIntersecting => {
      this.kitIntersection.emit(!!isIntersecting);
    });
  }
}
