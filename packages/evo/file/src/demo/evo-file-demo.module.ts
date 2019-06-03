import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoFileModule } from '../evo-file.module';
import { EvoFileDemoComponent } from './evo-file-demo.component';

@NgModule({
  imports: [
    CommonModule,
    EvoFileModule,
  ],
  declarations: [
    EvoFileDemoComponent,
  ],
  entryComponents: [
    EvoFileDemoComponent,
  ],
})
export class EvoFileDemoModule {
}
