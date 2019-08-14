import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { DropdownToggleDirective } from '../dropdown-toggle/dropdown-toggle.directive';

@Component({
  selector: 'evo-dropdown-item,button[uiDropdownItem],a[uiDropdownItem]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./dropdown-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownItemComponent {
  @Input() uiDropdownItem: void;

  @Input() closeOnClick?: boolean;

  constructor(
    private toggle: DropdownToggleDirective,
  ) {
  }

  @HostListener('click') clickHandler() {
    if (this.closeOnClick || (typeof this.closeOnClick === 'undefined' && this.toggle.closeOnItemClick)) {
      this.toggle.close();
    }
  }
}
