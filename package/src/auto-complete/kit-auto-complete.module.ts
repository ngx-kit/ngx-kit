import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitInputModule } from '../input/kit-input.module';
import { KitAutoCompleteComponent } from './kit-auto-complete.component';

const exported = [
  KitAutoCompleteComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCoreModule,
    KitInputModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: [],
})
export class KitAutoCompleteModule {
}
