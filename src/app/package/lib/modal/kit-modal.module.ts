import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitModalComponent } from './kit-modal/kit-modal.component';

const exp = [
  KitModalComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitModalModule {
}
