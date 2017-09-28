import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitAnchorDirective } from './kit-anchor.directive';
import { KitOverlayHostComponent } from './kit-overlay-host.component';
import { KitOverlayDirective } from './kit-overlay.directive';
import { KitOverlayService } from './kit-overlay.service';

const exports = [
  KitAnchorDirective,
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
  providers: [],
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
