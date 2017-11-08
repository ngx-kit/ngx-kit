import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModalComponent } from './ui-modal/ui-modal.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    UiModalComponent,
  ],
  declarations: [
    UiModalComponent,
  ],
})
export class UiModalModule {
}
