import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { DropdownToggleDirective } from './dropdown-toggle/dropdown-toggle.directive';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
  ],
  declarations: [
    DropdownComponent,
    DropdownItemComponent,
    DropdownToggleDirective,
  ],
  entryComponents: [
    DropdownComponent,
  ],
  exports: [
    DropdownComponent,
    DropdownItemComponent,
    DropdownToggleDirective,
  ],
})
export class EvoDropdownModule {
}
