import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiToggleComponent } from './ui-toggle/ui-toggle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    UiToggleComponent,
  ],
  exports: [
    UiToggleComponent,
  ],
})
export class UiToggleModule {
}
