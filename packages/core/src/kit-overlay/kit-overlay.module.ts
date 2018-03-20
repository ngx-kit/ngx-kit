import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitOverlayHostWrapperComponent } from './kit-overlay-host/kit-overlay-host-wrapper.component';
import { KitOverlayHostComponent } from './kit-overlay-host/kit-overlay-host.component';
import { DropdownPositioningService } from './kit-overlay-position/dropdown-positioning.service';
import { KitOverlayPositionDirective } from './kit-overlay-position/kit-overlay-position.directive';
import { SidePositioningService } from './kit-overlay-position/side-positioning.service';
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
    KitOverlayHostWrapperComponent,
    KitOverlayHostComponent,
    KitOverlayPositionDirective,
  ],
  entryComponents: [
    KitOverlayHostWrapperComponent,
    KitOverlayHostComponent,
  ],
})
export class KitOverlayModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitOverlayModule,
      providers: [
        KitOverlayService,
        DropdownPositioningService,
        SidePositioningService,
      ],
    };
  }
}
