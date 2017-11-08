import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitSlideModule } from '@ngx-kit/core';
import { UiAlertTitleComponent } from './ui-alert-title/ui-alert-title.component';
import { UiAlertComponent } from './ui-alert/ui-alert.component';

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
    KitCommonModule,
  ],
  exports: [
    UiAlertComponent,
    UiAlertTitleComponent,
  ],
  declarations: [
    UiAlertComponent,
    UiAlertTitleComponent,
  ],
})
export class UiAlertModule {
}
