import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreService } from './kit-core.service';
import { KitAnchorDirective } from './overlay/anchor.directive';
import { KitOverlayService } from './overlay/kit-overlay.service';
import { KitOverlayContainerComponent } from './overlay/overlay-container.component';
import { KitOverlayHostComponent } from './overlay/overlay-host.component';
import { KitOverlayComponent } from './overlay/overlay.component';

const exported = [
  KitAnchorDirective,
  KitOverlayComponent,
  KitOverlayContainerComponent,
];
const entry = [
  KitOverlayHostComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
    ...entry,
  ],
  entryComponents: [
    ...entry,
  ],
  providers: [],
})
export class KitCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitCoreModule,
      providers: [
        KitCoreService,
        KitOverlayService,
      ],
    }
  }
}
