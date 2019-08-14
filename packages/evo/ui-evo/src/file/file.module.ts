import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileHolderDirective } from './file-holder.directive';
import { FileComponent } from './file.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FileComponent,
    FileHolderDirective,
  ],
  exports: [
    FileComponent,
    FileHolderDirective,
  ],
})
export class FileModule {
}
