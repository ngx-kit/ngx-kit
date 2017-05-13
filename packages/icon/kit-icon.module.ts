import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { KitIconComponent } from './kit-icon/kit-icon.component';
import { KitIconService } from './kit-icon.service';
import { KitIconRegistryService } from './kit-icon-registry.service';

@NgModule({
  imports: [
    HttpModule,
  ],
  exports: [
    KitIconComponent,
  ],
  declarations: [
    KitIconComponent,
  ],
  providers: [
    KitIconService,
    KitIconRegistryService,
  ]
})
export class KitIconModule {
}
