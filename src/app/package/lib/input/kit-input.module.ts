import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitInputComponent } from './kit-input/kit-input.component';

const exp = [
  KitInputComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitInputModule {
}
