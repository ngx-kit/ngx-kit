import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClassModule } from '@ngx-kit/evo/util';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    ClassModule,
  ],
  declarations: [
    DialogComponent,
  ],
  entryComponents: [
    DialogComponent,
  ],
  exports: [
    DialogComponent,
  ],
})
export class DialogModule {
}
