import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitModalBackdropComponent } from './kit-modal-backdrop/kit-modal-backdrop.component';
import { KitModalComponent } from './kit-modal/kit-modal.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitModalBackdropComponent,
    KitModalComponent,
  ],
  exports: [
    KitModalComponent,
  ],
  entryComponents: [
    KitModalBackdropComponent,
  ],
})
export class KitModalModule {
}
