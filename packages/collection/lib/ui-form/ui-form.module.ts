import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiFormGroupComponent } from './ui-form-group/ui-form-group.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    UiFormGroupComponent,
  ],
  declarations: [
    UiFormGroupComponent,
  ],
})
export class UiFormModule {
}
