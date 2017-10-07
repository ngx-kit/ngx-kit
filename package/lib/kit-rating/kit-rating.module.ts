import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitIconsModule } from '@ngx-kit/ngx-kit';
import { KitRatingComponent } from './kit-rating/kit-rating.component';

const exp = [
  KitRatingComponent,
];

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
    KitIconsModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitRatingModule {
}
