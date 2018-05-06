import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiLoadingBarComponent } from './ui-loading-bar/ui-loading-bar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiLoadingBarComponent,
  ],
  exports: [
    UiLoadingBarComponent,
  ],
})
export class UiLoadingBarModule {
}
