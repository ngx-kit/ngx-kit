import { Directive, Input, OnChanges, Self, } from '@angular/core';
import { KitAlertComponent } from '../../alert/kit-alert.component';

@Directive({
  selector: 'kit-alert,[kitAlert]',
})
export class KitAlertExtenderDirective implements OnChanges {
  @Input() color = 'default';

  constructor(@Self() private alert: KitAlertComponent) {
  }

  ngOnChanges() {
    this.alert.styler.applyState({
      color: this.color,
    });
  }
}
