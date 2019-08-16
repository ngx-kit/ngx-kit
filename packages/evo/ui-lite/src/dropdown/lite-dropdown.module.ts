import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LiteDropdownItemComponent } from './dropdown-item/lite-dropdown-item.component';
import { LiteDropdownToggleDirective } from './dropdown-toggle/lite-dropdown-toggle.directive';
import { LiteDropdownComponent } from './dropdown/lite-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
  ],
  declarations: [
    LiteDropdownComponent,
    LiteDropdownItemComponent,
    LiteDropdownToggleDirective,
  ],
  entryComponents: [
    LiteDropdownComponent,
  ],
  exports: [
    LiteDropdownComponent,
    LiteDropdownItemComponent,
    LiteDropdownToggleDirective,
  ],
})
export class LiteDropdownModule {
}
