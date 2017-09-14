import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitAnchorDirective } from './kit-anchor.directive';
import { KitOverlayDirective } from './kit-overlay.directive';
import { KitOverlayContainerComponent } from './kit-overlay-container.component';
import { KitOverlayHostComponent } from './kit-overlay-host.component';
import { KitOverlayService } from './kit-overlay.service';

const exports = [
  KitAnchorDirective,
  KitOverlayContainerComponent,
  KitOverlayDirective,
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
  ],
  entryComponents: [],
  providers: [
    KitOverlayService, // @todo forRoot()
  ],
})
export class KitOverlayModule {
}
