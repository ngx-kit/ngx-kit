import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LiteButton } from '../lite-button';
import { ButtonDemoComponent } from './button-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LiteButton,
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
