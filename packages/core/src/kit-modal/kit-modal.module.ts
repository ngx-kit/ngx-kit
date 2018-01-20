import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitModalBackdropComponent } from './kit-modal-backdrop/kit-modal-backdrop.component';
import { KitModalService } from './kit-modal.service';
import { KitModalDirective } from './kit-modal/kit-modal.directive';
import { kitModalDefaultParams } from './meta';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitModalBackdropComponent,
    KitModalDirective,
  ],
  exports: [
    KitModalDirective,
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
        {
          provide: kitModalDefaultParams,
          useValue: {
            backdropClose: true,
            escClose: true,
          },
        },
      ],
    };
  }
}
