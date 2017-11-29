import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitIconsModule, KitRepeatModule } from '@ngx-kit/core';
import { UiRatingComponent } from './ui-rating/ui-rating.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
    KitIconsModule,
    KitRepeatModule,
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
