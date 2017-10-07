import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCommonModule } from '../kit-common/kit-common.module';
import { KitOverlayHostComponent } from './kit-overlay-host.component';
import { KitOverlayDirective } from './kit-overlay.directive';
import { KitOverlayService } from './kit-overlay.service';

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCommonModule,
  ],
  exports: [
    KitOverlayDirective,
    KitOverlayHostComponent,
  ],
  declarations: [
    KitOverlayDirective,
    KitOverlayHostComponent,
  ],
})
export class KitOverlayModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitOverlayModule,
      providers: [
        KitOverlayService,
      ],
    };
  }
}
