import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOutsideClickModule, KitOverlayModule, KitPositionModule } from '@ngx-kit/core';
import { UiCustomSelectComponent } from './ui-custom-select/ui-custom-select.component';

@NgModule({
  imports: [
    CommonModule,
    KitOverlayModule,
    KitPositionModule,
    KitOutsideClickModule,
  ],
  declarations: [
    UiCustomSelectComponent,
  ],
  exports: [
    UiCustomSelectComponent,
  ],
})
export class UiCustomSelectModule {
}
