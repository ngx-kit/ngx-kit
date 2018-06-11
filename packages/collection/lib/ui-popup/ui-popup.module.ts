import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitClassModule, KitOverlayModule } from '@ngx-kit/core';
import { KitPositionModule } from '../../../core/src/kit-position/kit-position.module';
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
