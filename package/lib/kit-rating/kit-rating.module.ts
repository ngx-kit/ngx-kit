import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitIconsModule } from '@ngx-kit/ngx-kit';
import { KitRatingComponent } from './kit-rating/kit-rating.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
    KitIconsModule,
  ],
  exports: [
    KitRatingComponent,
  ],
  declarations: [
    KitRatingComponent,
  ],
})
export class KitRatingModule {
}
