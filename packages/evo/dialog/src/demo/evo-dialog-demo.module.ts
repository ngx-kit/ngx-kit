import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvoDialogModule } from '../evo-dialog.module';
import { EvoDialogDemoModalComponent } from './evo-dialog-demo-modal.component';
import { EvoDialogDemoComponent } from './evo-dialog-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EvoDialogModule,
  ],
  declarations: [
    EvoDialogDemoComponent,
    EvoDialogDemoModalComponent,
  ],
  entryComponents: [
    EvoDialogDemoComponent,
    EvoDialogDemoModalComponent,
  ],
})
export class EvoDialogDemoModule {
}
