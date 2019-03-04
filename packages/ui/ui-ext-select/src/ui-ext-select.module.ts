import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitAnchorModule, KitFocusListenerModule, KitIconsModule, KitOverlayModule, KitPositionModule } from '@ngx-kit/core';
import { UiExtSelectComponent } from './ui-ext-select/ui-ext-select.component';

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
    UiExtSelectComponent,
  ],
  exports: [
    UiExtSelectComponent,
  ],
})
export class UiExtSelectModule {
}
