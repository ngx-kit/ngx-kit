import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiDialogModule } from '../ui-dialog.module';
import { UiDialogDemoComponent } from './ui-dialog-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiDialogModule,
  ],
  declarations: [
    UiDialogDemoComponent,
  ],
  entryComponents: [
    UiDialogDemoComponent,
  ],
})
export class UiDialogDemoModule {
}
