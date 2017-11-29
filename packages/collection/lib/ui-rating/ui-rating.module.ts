import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitIconsModule, KitRepeatModule } from '@ngx-kit/core';
import { UiRatingComponent } from './ui-rating/ui-rating.component';

@NgModule({
  imports: [
    CommonModule,
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
