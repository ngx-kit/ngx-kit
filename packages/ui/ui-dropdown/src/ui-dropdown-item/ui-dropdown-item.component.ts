import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { UiDropdownToggleDirective } from '../ui-dropdown-toggle/ui-dropdown-toggle.directive';

@Component({
  selector: 'ui-dropdown-item,button[uiDropdownItem],a[uiDropdownItem]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-dropdown-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDropdownItemComponent {
  @Input() uiDropdownItem: void;

  @Input() closeOnClick?: boolean;

  constructor(
    private toggle: UiDropdownToggleDirective,
  ) {
  }

  @HostListener('click') clickHandler() {
    if (this.closeOnClick || (typeof this.closeOnClick === 'undefined' && this.toggle.closeOnItemClick)) {
      this.toggle.close();
    }
  }
}
