import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../button.module';
import { ButtonDemoComponent } from './button-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
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
