import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylerModule } from '@ngx-kit/styler';

import { KitCoreService } from './kit-core.service';
import { KitOverlayService } from './overlay/kit-overlay.service';
import { KitAnchorDirective } from './overlay/anchor.directive';
import { KitOverlayComponent } from './overlay/overlay.component';
import { KitOverlayHostComponent } from './overlay/overlay-host.component';
import { KitOverlayContainerComponent } from './overlay/overlay-container.component';

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
      ]
    }
  }

}
