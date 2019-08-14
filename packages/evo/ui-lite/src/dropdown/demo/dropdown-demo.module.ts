import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoDropdownModule } from '../evo-dropdown.module';
import { DropdownDemoComponent } from './dropdown-demo.component';

@NgModule({
  imports: [
    CommonModule,
    EvoDropdownModule,
  ],
  declarations: [
    DropdownDemoComponent,
  ],
  entryComponents: [
    DropdownDemoComponent,
  ],
})
export class DropdownDemoModule {
}
