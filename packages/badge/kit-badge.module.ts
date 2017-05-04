import { NgModule } from '@angular/core';

import { KitBadgeComponent } from './kit-badge/kit-badge.component';
import { KitBadgeService } from './kit-badge.service';

@NgModule({
  imports: [],
  exports: [
    KitBadgeComponent,
  ],
  declarations: [
    KitBadgeComponent,
  ],
  providers: [
    KitBadgeService,
  ]
})
export class KitBadgeModule {
}
