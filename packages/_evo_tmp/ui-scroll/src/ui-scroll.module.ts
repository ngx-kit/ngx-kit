import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiScrollComponent } from './ui-scroll/ui-scroll.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiScrollComponent,
  ],
  exports: [
    UiScrollComponent,
  ],
})
export class UiScrollModule {
}
