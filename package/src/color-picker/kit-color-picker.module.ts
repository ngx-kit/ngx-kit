import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitColorPickerPopupViewComponent } from './kit-color-picker-popup-view.component';
import { KitColorPickerPopupDirective } from './kit-color-picker-popup.directive';
import { KitColorPickerSliderDirective } from './kit-color-picker-slider.directive';
import { KitColorPickerComponent } from './kit-color-picker.component';

const locals = [
  KitColorPickerSliderDirective,
];
const entries = [
  KitColorPickerPopupViewComponent,
];
const exports = [
  KitColorPickerComponent,
  KitColorPickerSliderDirective,
  KitColorPickerPopupDirective,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
