import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitCoreModule } from '@ngx-kit/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitAutoCompleteComponent } from './kit-auto-complete/kit-auto-complete.component';
import { KitCheckboxComponent } from './kit-checkbox/kit-checkbox.component';
import { KitFormErrorComponent } from './kit-form-error/kit-form-error.component';
import { KitFormGroupComponent } from './kit-form-group/kit-form-group.component';
import { KitFormLabelComponent } from './kit-form-label/kit-form-label.component';
import { KitFormTouchComponent } from './kit-form-touch/kit-form-touch.directive';
import { KitInputComponent } from './kit-input/kit-input.component';
import { KitMathInputComponent } from './kit-math-input/kit-math-input.component';
import { KitRadioComponent } from './kit-radio/kit-radio.component';
import { KitSelectComponent } from './kit-select/kit-select.component';
import { KitTextareaComponent } from './kit-textarea/kit-textarea.component';
import { KitToggleComponent } from './kit-toggle/kit-toggle.component';

const exported = [
  KitAutoCompleteComponent,
  KitCheckboxComponent,
  KitFormErrorComponent,
  KitFormGroupComponent,
  KitFormLabelComponent,
  KitFormTouchComponent,
  KitInputComponent,
  KitMathInputComponent,
  KitRadioComponent,
  KitSelectComponent,
  KitTextareaComponent,
  KitToggleComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    FormsModule,
    KitCoreModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: [],
})
export class KitFormsModule {
}
