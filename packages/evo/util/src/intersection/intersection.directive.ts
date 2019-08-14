import { Directive, EventEmitter, OnInit, Output } from '@angular/core';
import { Intersection } from './intersection.service';

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
export class IntersectionDirective implements OnInit {
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
