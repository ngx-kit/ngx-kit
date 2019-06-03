import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvoTextModule } from '../evo-text.module';
import { UiTextDemoComponent } from './ui-text-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EvoTextModule,
  ],
  declarations: [
    UiTextDemoComponent,
  ],
  entryComponents: [
    UiTextDemoComponent,
  ],
})
export class UiTextDemoModule {
}
