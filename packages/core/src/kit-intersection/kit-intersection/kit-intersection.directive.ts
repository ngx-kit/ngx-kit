import { Directive, EventEmitter, OnInit, Output } from '@angular/core';
import { KitIntersectionService } from '../kit-intersection.service';

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
  selector: '[kitIntersection]',
  providers: [
    KitIntersectionService,
  ],
})
export class KitIntersectionDirective implements OnInit {
  @Output() kitIntersection = new EventEmitter<boolean>();

  constructor(
    private intersection: KitIntersectionService,
  ) {
  }

  ngOnInit() {
    this.intersection.observe().subscribe(isIntersecting => {
      this.kitIntersection.emit(!!isIntersecting);
    });
  }
}
