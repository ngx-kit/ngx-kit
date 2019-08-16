import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoFormModule as EvoFormModule } from '@ngx-kit/evo/form';
import { LiteFormFieldComponent } from './form-field/lite-form-field.component';
import { LiteFormComponent } from './form/lite-form.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LiteFormComponent,
    LiteFormFieldComponent,
  ],
  exports: [
    LiteFormComponent,
    LiteFormFieldComponent,
    EvoFormModule,
  ],
})
export class LiteFormModule {
}
