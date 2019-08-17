import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LiteButtonModule } from '../lite-button.module';
import { ButtonDemoComponent } from './button-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LiteButtonModule,
  ],
  declarations: [
    ButtonDemoComponent,
  ],
  entryComponents: [
    ButtonDemoComponent,
  ],
})
export class ButtonDemoModule {
}
