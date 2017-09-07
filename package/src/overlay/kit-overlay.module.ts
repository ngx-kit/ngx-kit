import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitAnchorDirective } from './kit-anchor.directive';
import { KitOverlayContainerComponent } from './kit-overlay-container.component';
import { KitOverlayHostComponent } from './kit-overlay-host.component';
import { KitOverlayComponent } from './kit-overlay.component';
import { KitOverlayService } from './kit-overlay.service';

const exports = [
  KitAnchorDirective,
  KitOverlayComponent,
  KitOverlayContainerComponent,
];
const entries = [
  KitOverlayHostComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
  ],
  exports: [
    ...exports,
  ],
  declarations: [
    ...exports,
    KitOverlayHostComponent,
  ],
  entryComponents: [
    ...entries,
  ],
  providers: [
    KitOverlayService,
  ],
})
export class KitOverlayModule {
}
