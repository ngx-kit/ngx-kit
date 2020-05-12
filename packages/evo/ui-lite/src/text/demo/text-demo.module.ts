import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LiteTextModule } from '../lite-text.module';
import { TextDemoComponent } from './text-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LiteTextModule,
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
