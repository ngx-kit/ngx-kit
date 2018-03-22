import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitModalBackdropComponent } from './kit-modal-backdrop/kit-modal-backdrop.component';
import { KitModalService } from './kit-modal.service';
import { KitModalComponent } from './kit-modal/kit-modal.component';
import { KitModalOptions } from './meta';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitModalBackdropComponent,
    KitModalComponent,
  ],
  exports: [
    KitModalComponent,
  ],
  entryComponents: [
    KitModalBackdropComponent,
  ],
})
export class KitModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitModalModule,
      providers: [
        KitModalService,
        KitModalOptions,
      ],
    };
  }
}
