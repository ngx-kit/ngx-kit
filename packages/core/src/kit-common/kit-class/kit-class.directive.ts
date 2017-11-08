import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { KitClassSetter } from '../meta';
import { KitClassService } from './kit-class.service';

/**
 * Provides `KitClassService` and pass property to `.apply` method.
 *
 * ```html
 * <div [kitClass]="{color: 'red', active: true}">
 * <div class="color-red active">
 * ```
 */
@Directive({
  selector: '[kitClass]',
  providers: [KitClassService],
})
export class KitClassDirective implements OnChanges {
  @Input() kitClass: KitClassSetter;

  constructor(private service: KitClassService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['kitClass']) {
      this.service.apply(this.kitClass);
    }
  }
}
