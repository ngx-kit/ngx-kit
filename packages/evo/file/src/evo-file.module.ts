import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoFileHolderDirective } from './evo-file-holder/evo-file-holder.directive';
import { EvoFileComponent } from './evo-file/evo-file.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EvoFileComponent,
    EvoFileHolderDirective,
  ],
  exports: [
    EvoFileComponent,
    EvoFileHolderDirective,
  ],
})
export class EvoFileModule {
}
