import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitModalComponent } from './kit-modal/kit-modal.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KitModalComponent,
  ],
  declarations: [
    KitModalComponent,
  ],
})
export class KitModalModule {
}
