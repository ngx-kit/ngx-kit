import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitClassModule, KitOverlayModule, KitPositionModule } from '@ngx-kit/core';
import { UiPopupComponent } from './ui-popup/ui-popup.component';

@NgModule({
  imports: [
    CommonModule,
    KitClassModule,
    KitPositionModule,
  ],
  declarations: [
    UiPopupComponent,
  ],
  exports: [
    KitOverlayModule,
    UiPopupComponent,
  ],
})
export class UiPopupModule {
}
