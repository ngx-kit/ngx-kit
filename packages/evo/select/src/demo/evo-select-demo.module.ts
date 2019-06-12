import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvoSelectDemoComponent } from './evo-select-demo.component';
import { EvoSelectModule } from '../evo-select.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EvoSelectModule,
  ],
  declarations: [
    EvoSelectDemoComponent,
  ],
  entryComponents: [
    EvoSelectDemoComponent,
  ],
})
export class EvoSelectDemoModule {
}
