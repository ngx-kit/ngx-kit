import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvoButtonModule } from '../evo-button.module';
import { EvoButtonDemoComponent } from './evo-button-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EvoButtonModule,
  ],
  declarations: [
    EvoButtonDemoComponent,
  ],
  entryComponents: [
    EvoButtonDemoComponent,
  ],
})
export class EvoButtonDemoModule {
}
