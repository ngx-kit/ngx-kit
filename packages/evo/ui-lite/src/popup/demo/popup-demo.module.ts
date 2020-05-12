import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LitePopupModule } from '../lite-popup.module';
import { PopupDemoComponent } from './popup-demo.component';

@NgModule({
  imports: [
    CommonModule,
    LitePopupModule,
  ],
  declarations: [
    PopupDemoComponent,
  ],
  entryComponents: [
    PopupDemoComponent,
  ],
})
export class PopupDemoModule {
}
