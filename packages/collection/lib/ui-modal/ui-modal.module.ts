import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitModalModule, KitOverlayModule } from '@ngx-kit/core';
import { UiModalFooterComponent } from './ui-modal-footer/ui-modal-footer.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiModalComponent,
    UiModalFooterComponent,
  ],
  exports: [
    KitModalModule,
    KitOverlayModule,
    UiModalComponent,
    UiModalFooterComponent,
  ],
})
export class UiModalModule {
}
