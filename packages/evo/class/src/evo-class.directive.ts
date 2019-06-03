import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EvoClassService } from './evo-class.service';
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
  providers: [EvoClassService],
})
export class EvoClassDirective implements OnChanges {
  @Input() evoClass: EvoClassSetter;

  constructor(private service: EvoClassService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['evoClass']) {
      this.service.apply(this.evoClass);
    }
  }
}
