import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LiteDialogModule } from '../lite-dialog.module';
import { DialogDemoModalComponent } from './dialog-demo-modal.component';
import { DialogDemoComponent } from './dialog-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LiteDialogModule,
  ],
  declarations: [
    DialogDemoComponent,
    DialogDemoModalComponent,
  ],
  entryComponents: [
    DialogDemoComponent,
    DialogDemoModalComponent,
  ],
})
export class DialogDemoModule {
}
