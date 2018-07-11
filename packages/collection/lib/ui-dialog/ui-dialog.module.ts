import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitClassModule } from '@ngx-kit/core';
import { UiDialogComponent } from './ui-dialog/ui-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KitClassModule,
  ],
  declarations: [
    UiDialogComponent,
  ],
  entryComponents: [
    UiDialogComponent,
  ],
})
export class UiDialogModule {
}
