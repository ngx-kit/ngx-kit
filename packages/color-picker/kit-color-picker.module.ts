import { NgModule } from '@angular/core';

import { KitColorPickerComponent } from './kit-color-picker/kit-color-picker.component';
import { KitColorPickerService } from './kit-color-picker.service';

@NgModule({
  imports: [],
  exports: [
    KitColorPickerComponent,
  ],
  declarations: [
    KitColorPickerComponent,
  ],
  providers: [
    KitColorPickerService,
  ]
})
export class KitColorPickerModule {
}
