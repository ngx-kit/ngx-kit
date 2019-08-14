import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Class } from './class';
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
  providers: [Class],
})
export class ClassDirective implements OnChanges {
  @Input() evoClass: EvoClassSetter;

  constructor(private service: Class) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['evoClass']) {
      this.service.apply(this.evoClass);
    }
  }
}
