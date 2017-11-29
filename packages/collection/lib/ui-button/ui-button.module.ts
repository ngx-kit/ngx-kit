import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonGroupComponent } from './ui-button-group/ui-button-group.component';
import { UiButtonComponent } from './ui-button/ui-button.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiButtonComponent,
    UiButtonGroupComponent,
  ],
  exports: [
    UiButtonComponent,
    UiButtonGroupComponent,
  ],
})
export class UiButtonModule {
}
