import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOutsideClickModule, KitOverlayModule, KitPositionModule } from '@ngx-kit/core';
import { UiDropdownItemComponent } from './ui-dropdown-item/ui-dropdown-item.component';
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
  ],
  exports: [
    KitOverlayModule,
    UiDropdownComponent,
    UiDropdownItemComponent,
  ],
})
export class UiDropdownModule {
}
