import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylerModule } from '@ngx-kit/styler';

import { KitCoreService } from './kit-core.service';
import { KitHostService } from './kit-host.service';
import { KitAnchorDirective } from './host/anchor.directive';
import { KitHostComponent } from './host/host.component';
import { KitHostContainerComponent } from './host/host-container.component';

const exported = [
  KitAnchorDirective,
  KitHostComponent,
];

const entry = [
  KitHostContainerComponent,
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
        KitHostService,
      ]
    }
  }

}
