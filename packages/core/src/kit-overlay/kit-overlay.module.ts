import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayHostWrapperComponent } from './kit-overlay-host/kit-overlay-host-wrapper.component';
import { KitOverlayHostComponent } from './kit-overlay-host/kit-overlay-host.component';
import { KitOverlayPositionDirective } from './kit-overlay-position/kit-overlay-position.directive';
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
}
