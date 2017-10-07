import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitSlideModule } from '@ngx-kit/ngx-kit';
import { KitAlertTitleComponent } from './kit-alert-title/kit-alert-title.component';
import { KitAlertComponent } from './kit-alert/kit-alert.component';

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
    KitCommonModule,
  ],
  exports: [
    KitAlertComponent,
    KitAlertTitleComponent,
  ],
  declarations: [
    KitAlertComponent,
    KitAlertTitleComponent,
  ],
})
export class KitAlertModule {
}
