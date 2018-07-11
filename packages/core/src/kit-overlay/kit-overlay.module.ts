import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayHostWrapperComponent } from './kit-overlay-host/kit-overlay-host-wrapper.component';
import { KitOverlayHostComponent } from './kit-overlay-host/kit-overlay-host.component';
import { KitOverlayToggleDirective } from './kit-overlay-toggle/kit-overlay-toggle.directive';
import { KitOverlayDirective } from './kit-overlay/kit-overlay.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KitOverlayDirective,
    KitOverlayToggleDirective,
  ],
  declarations: [
    KitOverlayDirective,
    KitOverlayHostWrapperComponent,
    KitOverlayHostComponent,
    KitOverlayToggleDirective,
  ],
  entryComponents: [
    KitOverlayHostWrapperComponent,
    KitOverlayHostComponent,
  ],
})
export class KitOverlayModule {
}
