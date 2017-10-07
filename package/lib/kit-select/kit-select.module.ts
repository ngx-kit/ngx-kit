import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitSelectComponent } from './kit-select/kit-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    KitSelectComponent,
  ],
  declarations: [
    KitSelectComponent,
  ],
  providers: [],
})
export class KitSelectModule {
}
