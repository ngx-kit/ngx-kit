import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitModalComponent } from './kit-modal.component';
import { KitModalService } from './kit-modal.service';

const exports = [
  KitModalComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCoreModule,
  ],
  exports: exports,
  declarations: [
    ...exports,
  ],
  providers: [
    KitModalService,
  ],
})
export class KitModalModule {
}
