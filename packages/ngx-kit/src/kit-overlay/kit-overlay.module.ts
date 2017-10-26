import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCommonModule } from '../kit-common/kit-common.module';
import { KitOverlayHostComponent } from './kit-overlay-host/kit-overlay-host.component';
import { KitOverlayPositionDirective } from './kit-overlay-position/kit-overlay-position.directive';
import { KitOverlayService } from './kit-overlay.service';
import { KitOverlayDirective } from './kit-overlay/kit-overlay.directive';

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCommonModule,
  ],
  exports: [
    KitOverlayDirective,
    KitOverlayHostComponent,
    KitOverlayPositionDirective,
  ],
  declarations: [
    KitOverlayDirective,
    KitOverlayHostComponent,
    KitOverlayPositionDirective,
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
