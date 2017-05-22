import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { KitIconComponent } from './kit-icon/kit-icon.component';
import { KitIconService } from './kit-icon.service';
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
    KitIconService,
  ]
})
export class KitIconModule {

  static forRoot() {
    return {
      ngModule: KitIconModule,
      providers: [KitIconRegistryService]
    };
  }

}
