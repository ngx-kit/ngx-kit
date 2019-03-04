import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { UiDropdownComponent } from '../ui-dropdown/ui-dropdown.component';

@Component({
  selector: 'ui-dropdown-item,button[uiDropdownItem],a[uiDropdownItem]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-dropdown-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDropdownItemComponent {
  @Input() uiDropdownItem: void;

  constructor(private dropdown: UiDropdownComponent) {
  }

  @HostListener('click') clickHandler() {
    this.dropdown.toggle.close();
  }
}
