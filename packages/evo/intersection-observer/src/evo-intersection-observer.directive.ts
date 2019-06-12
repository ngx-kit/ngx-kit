import { Directive, EventEmitter, OnInit, Output } from '@angular/core';
import { EvoIntersectionObserver } from './evo-intersection-observer';

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
    EvoIntersectionObserver,
  ],
})
export class EvoIntersectionObserverDirective implements OnInit {
  @Output() kitIntersection = new EventEmitter<boolean>();

  constructor(
    private intersection: EvoIntersectionObserver,
  ) {
  }

  ngOnInit() {
    this.intersection.observe().subscribe(isIntersecting => {
      this.kitIntersection.emit(!!isIntersecting);
    });
  }
}
