import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { KitClassService } from './kit-class.service';

@Directive({
  selector: '[kitClass]',
  providers: [KitClassService],
})
export class KitClassDirective implements OnChanges {
  @Input() kitClass: any;

  constructor(private service: KitClassService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['kitClass']) {
      this.service.apply(this.kitClass);
    }
  }
}
