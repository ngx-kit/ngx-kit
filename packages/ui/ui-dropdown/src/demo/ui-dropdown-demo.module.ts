import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiDropdownModule } from '../ui-dropdown.module';
import { UiDropdownDemoComponent } from './ui-dropdown-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiDropdownModule,
  ],
  declarations: [
    UiDropdownDemoComponent,
  ],
  entryComponents: [
    UiDropdownDemoComponent,
  ],
})
export class UiDropdownDemoModule {
}
