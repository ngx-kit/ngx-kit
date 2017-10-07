import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { KitClassSetter } from '../meta';
import { KitClassService } from './kit-class.service';

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
