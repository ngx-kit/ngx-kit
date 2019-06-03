import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { EvoDropdownToggleDirective } from '../evo-dropdown-toggle/evo-dropdown-toggle.directive';

@Component({
  selector: 'evo-dropdown-item,button[evoDropdownItem],a[evoDropdownItem]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./evo-dropdown-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoDropdownItemComponent {
  @Input() evoDropdownItem: void;

  @Input() closeOnClick?: boolean;

  constructor(
    private toggle: EvoDropdownToggleDirective,
  ) {
  }

  @HostListener('click') clickHandler() {
    if (this.closeOnClick || (typeof this.closeOnClick === 'undefined' && this.toggle.closeOnItemClick)) {
      this.toggle.close();
    }
  }
}
