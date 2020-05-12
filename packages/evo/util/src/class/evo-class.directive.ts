import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EvoClass } from './evo-class';
import { EvoClassSetter } from './meta';

/**
 * Provides `EvoClassService` and pass input value to `KitClassService.apply` method.
 *
 *
 * ### Usage
 *
 * ```html
 * <div [evoClass]="{color: 'red', active: true, primary: false}">
 * <!--<div class="color-red active">-->
 * ```
 */
@Directive({
  selector: '[evoClass]',
  providers: [EvoClass],
})
export class EvoClassDirective implements OnChanges {
  @Input() evoClass: EvoClassSetter;

  constructor(private service: EvoClass) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['evoClass']) {
      this.service.apply(this.evoClass);
    }
  }
}
