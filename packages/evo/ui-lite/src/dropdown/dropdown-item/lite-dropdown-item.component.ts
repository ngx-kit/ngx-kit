import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { LiteDropdownToggleDirective } from '../dropdown-toggle/lite-dropdown-toggle.directive';

@Component({
  selector: 'lite-dropdown-item,button[liteDropdownItem],a[liteDropdownItem]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./lite-dropdown-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiteDropdownItemComponent {
  @Input() closeOnClick?: boolean;

  constructor(
    private toggle: LiteDropdownToggleDirective,
  ) {
  }

  @HostListener('click') clickHandler() {
    if (this.closeOnClick || (typeof this.closeOnClick === 'undefined' && this.toggle.closeOnItemClick)) {
      this.toggle.close();
    }
  }
}
