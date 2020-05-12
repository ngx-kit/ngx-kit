import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoClassModule } from '@ngx-kit/evo/util';
import { LiteDialogComponent } from './dialog/lite-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    EvoClassModule,
  ],
  declarations: [
    LiteDialogComponent,
  ],
  entryComponents: [
    LiteDialogComponent,
  ],
  exports: [
    LiteDialogComponent,
  ],
})
export class LiteDialogModule {
}
