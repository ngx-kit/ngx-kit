import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LiteLoadingBarComponent } from './loading-bar/lite-loading-bar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LiteLoadingBarComponent,
  ],
  exports: [
    LiteLoadingBarComponent,
  ],
})
export class LiteLoadingBarModule {
}
