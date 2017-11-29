import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitIconsModule } from '@ngx-kit/core';
import { UiRatingComponent } from './ui-rating/ui-rating.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
    KitIconsModule,
  ],
  declarations: [
    UiRatingComponent,
  ],
  exports: [
    UiRatingComponent,
  ],
})
export class UiRatingModule {
}
