import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitDialogLayoutComponent } from './kit-dialog-layout/kit-dialog-layout.component';
import { KitDialogService } from './kit-dialog.service';
import { KitDialogComponent } from './kit-dialog/kit-dialog.component';

const external = [
  KitDialogComponent,
  KitDialogLayoutComponent,
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
  ],
  exports: external,
  declarations: [
    ...external,
  ],
  providers: [
    KitDialogService,
  ],
})
export class KitDialogModule {
}
