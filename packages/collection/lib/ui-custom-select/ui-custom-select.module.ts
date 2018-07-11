import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayModule, KitPositionModule } from '@ngx-kit/core';
import { UiCustomSelectComponent } from './ui-custom-select/ui-custom-select.component';

@NgModule({
  imports: [
    CommonModule,
    KitOverlayModule,
    KitPositionModule,
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
