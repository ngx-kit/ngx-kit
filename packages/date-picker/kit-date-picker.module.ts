import { NgModule } from '@angular/core';

import { KitDatePickerComponent } from './kit-date-picker/kit-date-picker.component';
import { KitDatePickerService } from './kit-date-picker.service';

@NgModule({
  imports: [],
  exports: [
    KitDatePickerComponent,
  ],
  declarations: [
    KitDatePickerComponent,
  ],
  providers: [
    KitDatePickerService,
  ]
})
export class KitDatePickerModule {
}
