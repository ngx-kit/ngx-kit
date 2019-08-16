import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LiteDropdownModule } from '../lite-dropdown.module';
import { DropdownDemoComponent } from './dropdown-demo.component';

@NgModule({
  imports: [
    CommonModule,
    LiteDropdownModule,
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
