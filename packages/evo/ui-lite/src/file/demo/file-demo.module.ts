import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LiteFileModule } from '../lite-file.module';
import { FileDemoComponent } from './file-demo.component';

@NgModule({
  imports: [
    CommonModule,
    LiteFileModule,
  ],
  declarations: [
    FileDemoComponent,
  ],
  entryComponents: [
    FileDemoComponent,
  ],
})
export class FileDemoModule {
}
