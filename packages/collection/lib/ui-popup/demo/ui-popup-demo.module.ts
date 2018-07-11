import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPopupModule } from '../ui-popup.module';
import { UiPopupDemoComponent } from './ui-popup-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiPopupModule,
  ],
  declarations: [
    UiPopupDemoComponent,
  ],
  entryComponents: [
    UiPopupDemoComponent,
  ],
})
export class UiPopupDemoModule {
}
