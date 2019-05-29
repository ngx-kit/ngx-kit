import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOutsideClickModule, KitOverlayModule, KitPositionModule } from '@ngx-kit/core';
import { UiDropdownItemComponent } from './ui-dropdown-item/ui-dropdown-item.component';
import { UiDropdownToggleDirective } from './ui-dropdown-toggle/ui-dropdown-toggle.directive';
import { UiDropdownComponent } from './ui-dropdown/ui-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    KitPositionModule,
    KitOutsideClickModule,
  ],
  declarations: [
    UiDropdownComponent,
    UiDropdownItemComponent,
    UiDropdownToggleDirective,
  ],
  entryComponents: [
    UiDropdownComponent,
  ],
  exports: [
    KitOverlayModule,
    UiDropdownComponent,
    UiDropdownItemComponent,
    UiDropdownToggleDirective,
  ],
})
export class UiDropdownModule {
}
