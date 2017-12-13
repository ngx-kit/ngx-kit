import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitOverlayHostComponent } from './kit-overlay-host/kit-overlay-host.component';
import { DropdownStrategyService } from './kit-overlay-position/dropdown-strategy.service';
import { KitOverlayPositionDirective } from './kit-overlay-position/kit-overlay-position.directive';
import { SideStrategyService } from './kit-overlay-position/side-strategy.service';
import { KitOverlayService } from './kit-overlay.service';
import { KitOverlayDirective } from './kit-overlay/kit-overlay.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KitOverlayDirective,
    KitOverlayPositionDirective,
  ],
  declarations: [
    KitOverlayDirective,
    KitOverlayHostComponent,
    KitOverlayPositionDirective,
  ],
  entryComponents: [
    KitOverlayHostComponent,
  ],
})
export class KitOverlayModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitOverlayModule,
      providers: [
        KitOverlayService,
        DropdownStrategyService,
        SideStrategyService,
      ],
    };
  }
}
