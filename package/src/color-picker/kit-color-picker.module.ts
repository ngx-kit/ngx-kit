import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitColorPickerBoxComponent } from './kit-color-picker-box.component';
import { KitColorPickerPopupComponent } from './kit-color-picker-popup.component';
import { KitColorPickerSliderDirective } from './kit-color-picker-slider.directive';
import { KitColorPickerDirective } from './kit-color-picker.directive';

const locals = [
  KitColorPickerSliderDirective,
];
const entries = [
  KitColorPickerPopupComponent,
];
const exports = [
  KitColorPickerBoxComponent,
  KitColorPickerSliderDirective,
  KitColorPickerDirective,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCoreModule,
  ],
  exports: [
    ...exports,
  ],
  declarations: [
    ...locals,
    ...entries,
    ...exports,
  ],
  entryComponents: [
    ...entries,
  ],
  providers: [],
})
export class KitColorPickerModule {
}
