import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LiteFileHolderDirective } from './file-holder/lite-file-holder.directive';
import { LiteFileComponent } from './file/lite-file.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LiteFileComponent,
    LiteFileHolderDirective,
  ],
  exports: [
    LiteFileComponent,
    LiteFileHolderDirective,
  ],
})
export class LiteFileModule {
}
