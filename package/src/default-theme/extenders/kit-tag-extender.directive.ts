import { Directive, Input, OnChanges, Self, } from '@angular/core';
import { KitTagComponent } from '../../tag/kit-tag.component';

@Directive({
  selector: 'kit-tag,[kitTag]',
})
export class KitTagExtenderDirective implements OnChanges {
  @Input() color = 'default';

  constructor(@Self() private tag: KitTagComponent) {
  }

  ngOnChanges() {
    this.tag.styler.applyState({
      color: this.color,
    });
  }
}
