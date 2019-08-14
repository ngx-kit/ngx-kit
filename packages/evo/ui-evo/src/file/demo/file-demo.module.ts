import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileModule } from '../file.module';
import { FileDemoComponent } from './file-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FileModule,
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
