import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiButtonModule } from '../ui-button.module';
import { UiButtonDemoComponent } from './ui-button-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiButtonModule,
  ],
  declarations: [
    UiButtonDemoComponent,
  ],
  entryComponents: [
    UiButtonDemoComponent,
  ],
})
export class UiButtonDemoModule {
}
