import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiToggleModule } from '../ui-toggle.module';
import { UiToggleDemoComponent } from './ui-toggle-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiToggleModule,
  ],
  declarations: [
    UiToggleDemoComponent,
  ],
  entryComponents: [
    UiToggleDemoComponent,
  ],
})
export class UiToggleDemoModule {
}
