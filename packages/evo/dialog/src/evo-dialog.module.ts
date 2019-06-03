import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoClassModule } from '@ngx-kit/evo/class';
import { EvoDialogComponent } from './evo-dialog/evo-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    EvoClassModule,
  ],
  declarations: [
    EvoDialogComponent,
  ],
  entryComponents: [
    EvoDialogComponent,
  ],
  exports: [
    EvoDialogComponent,
  ],
})
export class EvoDialogModule {
}
