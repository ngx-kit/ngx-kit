import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitCoreModule } from '@ngx-kit/core';
import { StylerModule } from '@ngx-kit/styler/src/styler.module';
import { KitModalService } from './kit-modal.service';
import { KitModalLayoutComponent } from './kit-modal/kit-modal-layout.component';
import { KitModalComponent } from './kit-modal/kit-modal.component';

const external = [
  KitModalComponent,
  KitModalLayoutComponent,
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    StylerModule,
    KitCoreModule,
  ],
  exports: external,
  declarations: [
    ...external,
  ],
  providers: [
    KitModalService,
  ],
})
export class KitModalsModule {
}
