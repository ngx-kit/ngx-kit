import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoDropdownModule } from '../evo-dropdown.module';
import { EvoDropdownDemoComponent } from './evo-dropdown-demo.component';

@NgModule({
  imports: [
    CommonModule,
    EvoDropdownModule,
  ],
  declarations: [
    EvoDropdownDemoComponent,
  ],
  entryComponents: [
    EvoDropdownDemoComponent,
  ],
})
export class EvoDropdownDemoModule {
}
