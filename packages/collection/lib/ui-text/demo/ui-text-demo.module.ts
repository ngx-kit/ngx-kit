import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiTextModule } from '../ui-text.module';
import { UiTextDemoComponent } from './ui-text-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiTextModule,
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
