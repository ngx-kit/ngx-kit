import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { KitIconComponent } from './kit-icon/kit-icon.component';
import { KitIconRegistryService } from './kit-icon-registry.service';

const external = [
  KitIconComponent,
];

/**
 * @todo register icons in forRoot().
 */

@NgModule({
  imports: [
    HttpModule,
  ],
  exports: external,
  declarations: [
    ...external,
  ],
  providers: [
  ]
})
export class KitIconModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitIconModule,
      providers: [KitIconRegistryService]
    };
  }

}
