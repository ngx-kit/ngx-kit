import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoDropdownItemComponent } from './evo-dropdown-item/evo-dropdown-item.component';
import { EvoDropdownToggleDirective } from './evo-dropdown-toggle/evo-dropdown-toggle.directive';
import { EvoDropdownComponent } from './evo-dropdown/evo-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
  ],
  declarations: [
    EvoDropdownComponent,
    EvoDropdownItemComponent,
    EvoDropdownToggleDirective,
  ],
  entryComponents: [
    EvoDropdownComponent,
  ],
  exports: [
    EvoDropdownComponent,
    EvoDropdownItemComponent,
    EvoDropdownToggleDirective,
  ],
})
export class EvoDropdownModule {
}
