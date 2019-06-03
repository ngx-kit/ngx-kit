import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitAnchorModule, KitFocusListenerModule, KitIconsModule, KitOverlayModule, KitPositionModule } from '@ngx-kit/core';
import { UiSelectComponent } from './ui-select/ui-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KitOverlayModule,
    KitAnchorModule,
    KitPositionModule,
    KitFocusListenerModule,
    KitIconsModule,
  ],
  declarations: [
    UiSelectComponent,
  ],
  exports: [
    UiSelectComponent,
  ],
})
export class UiSelectModule {
}
