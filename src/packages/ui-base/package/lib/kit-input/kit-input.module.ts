import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitInputComponent } from './kit-input/kit-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    KitInputComponent,
  ],
  declarations: [
    KitInputComponent,
  ],
})
export class KitInputModule {
}
