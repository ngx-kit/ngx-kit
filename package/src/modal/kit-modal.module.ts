import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitModalComponent } from './kit-modal.component';
import { KitModalService } from './kit-modal.service';

const external = [
  KitModalComponent,
];

@NgModule({
  imports: [
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
export class KitModalModule {
}
