import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { KitClassService } from './kit-class.service';
import { KitClassSetter } from './meta';

/**
 * Provides `KitClassService` and pass input value to `KitClassService.apply` method.
 *
 *
 * ### Usage
 *
 * ```html
 * <div [kitClass]="{color: 'red', active: true, primary: false}">
 * <!--<div class="color-red active">-->
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
