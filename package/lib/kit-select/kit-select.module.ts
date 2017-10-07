import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitSelectComponent } from './kit-select/kit-select.component';

const exp = [
  KitSelectComponent,
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
export class KitSelectModule {
}
