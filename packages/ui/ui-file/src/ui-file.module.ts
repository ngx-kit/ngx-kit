import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiFileHolderDirective } from './ui-file-holder/ui-file-holder.directive';
import { UiFileComponent } from './ui-file/ui-file.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiFileComponent,
    UiFileHolderDirective,
  ],
  exports: [
    UiFileComponent,
    UiFileHolderDirective,
  ],
})
export class UiFileModule {
}
