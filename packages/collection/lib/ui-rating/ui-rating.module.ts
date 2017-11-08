import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitIconsModule } from '@ngx-kit/ngx-kit';
import { UiRatingComponent } from './ui-rating/ui-rating.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
    KitIconsModule,
  ],
  exports: [
    UiRatingComponent,
  ],
  declarations: [
    UiRatingComponent,
  ],
})
export class UiRatingModule {
}
