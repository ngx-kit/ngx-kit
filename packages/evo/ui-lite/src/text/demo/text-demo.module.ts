import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextModule } from '../text.module';
import { TextDemoComponent } from './text-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TextModule,
  ],
  declarations: [
    TextDemoComponent,
  ],
  entryComponents: [
    TextDemoComponent,
  ],
})
export class TextDemoModule {
}
