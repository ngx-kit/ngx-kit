import { Directive, Input, OnChanges, Self, } from '@angular/core';
import { KitBadgeComponent } from '../../badge/kit-badge.component';

@Directive({
  selector: 'kit-badge,[kitBadge]',
})
export class KitBadgeExtenderDirective implements OnChanges {
  @Input() color = 'default';

  constructor(@Self() private badge: KitBadgeComponent) {
  }

  ngOnChanges() {
    this.badge.styler.applyState({
      color: this.color,
    });
  }
}
