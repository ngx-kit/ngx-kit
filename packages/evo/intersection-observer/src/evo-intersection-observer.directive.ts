import { Directive, EventEmitter, OnInit, Output } from '@angular/core';
import { EvoIntersectionObserverService } from './evo-intersection-observer.service';

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
    EvoIntersectionObserverService,
  ],
})
export class EvoIntersectionObserverDirective implements OnInit {
  @Output() kitIntersection = new EventEmitter<boolean>();

  constructor(
    private intersection: EvoIntersectionObserverService,
  ) {
  }

  ngOnInit() {
    this.intersection.observe().subscribe(isIntersecting => {
      this.kitIntersection.emit(!!isIntersecting);
    });
  }
}
