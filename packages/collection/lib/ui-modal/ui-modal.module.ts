import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayModule } from '@ngx-kit/core';
import { UiModalComponent } from './ui-modal/ui-modal.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiModalComponent,
  ],
  exports: [
    KitOverlayModule,
    UiModalComponent,
  ],
})
export class UiModalModule {
}
