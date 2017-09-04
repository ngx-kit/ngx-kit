import { Directive, Input, OnChanges, Self, } from '@angular/core';
import { KitButtonComponent } from '../../button/kit-button.component';

@Directive({
  selector: 'kit-button,[kitButton]',
})
export class KitButtonExtenderDirective implements OnChanges {
  @Input() color = 'default';

  @Input() inverted = false;

  @Input() outlined = false;

  @Input() size = 'm';

  constructor(@Self() private button: KitButtonComponent) {
  }

  ngOnChanges() {
    this.button.styler.host.applyState({
      inverted: this.inverted,
      outlined: this.outlined,
      color: this.color,
      size: this.size,
    });
  }
}
