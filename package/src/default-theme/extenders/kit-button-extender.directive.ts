import { Directive, Input, OnChanges, Self, } from '@angular/core';
import { KitButtonComponent } from '../../button/kit-button.component';

@Directive({
  selector: 'kit-button,[kitButton]',
})
export class KitButtonExtenderDirective implements OnChanges {
  @Input() inverted: boolean;

  @Input() outlined: boolean;

  @Input() color: string;

  @Input() size: string;

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
