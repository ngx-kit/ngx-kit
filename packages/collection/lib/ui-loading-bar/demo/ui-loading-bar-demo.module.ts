import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiLoadingBarModule } from '../ui-loading-bar.module';
import { UiLoadingBarDemoComponent } from './ui-loading-bar-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiLoadingBarModule,
  ],
  declarations: [
    UiLoadingBarDemoComponent,
  ],
})
export class UiLoadingBarDemoModule {
}
