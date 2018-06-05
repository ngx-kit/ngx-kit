import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from '../ui-button.module';
import { UiButtonDemoComponent } from './ui-button-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiButtonModule,
  ],
  declarations: [
    UiButtonDemoComponent,
  ],
})
export class UiButtonDemoModule {
}
