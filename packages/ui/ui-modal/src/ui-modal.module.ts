import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitClassModule, KitModalModule } from '@ngx-kit/core';
import { UiModalFooterComponent } from './ui-modal-footer/ui-modal-footer.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';

@NgModule({
  imports: [
    CommonModule,
    KitClassModule,
    KitModalModule,
  ],
  declarations: [
    UiModalComponent,
    UiModalFooterComponent,
  ],
  entryComponents: [
    UiModalComponent,
    UiModalFooterComponent,
  ],
  exports: [
    UiModalComponent,
    UiModalFooterComponent,
  ],
})
export class UiModalModule {
}
