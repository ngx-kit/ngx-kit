import { Directive, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { KitAriaFocusGridService } from './kit-aria-focus-grid.service';

@Directive({
  selector: '[kitAriaFocusGrid]',
  providers: [
    KitAriaFocusGridService,
  ],
})
export class KitAriaFocusGridDirective implements OnChanges {
  @Input() kitAriaFocusGrid: any[][];

  constructor(private service: KitAriaFocusGridService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['kitAriaFocusGrid']) {
      this.service.grid = this.kitAriaFocusGrid;
    }
  }
}
