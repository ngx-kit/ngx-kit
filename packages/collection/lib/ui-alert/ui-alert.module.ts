import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitClassModule } from '@ngx-kit/core';
import { UiAlertTitleComponent } from './ui-alert-title/ui-alert-title.component';
import { UiAlertComponent } from './ui-alert/ui-alert.component';

@NgModule({
  imports: [
    CommonModule,
    KitClassModule,
  ],
  declarations: [
    UiAlertComponent,
    UiAlertTitleComponent,
  ],
  exports: [
    UiAlertComponent,
    UiAlertTitleComponent,
  ],
})
export class UiAlertModule {
}
