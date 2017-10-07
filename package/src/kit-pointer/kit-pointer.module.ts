import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitPointerLineDirective } from './kit-pointer-line/kit-pointer-line.directive';

const exp = [
  KitPointerLineDirective,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  entryComponents: [],
  providers: [],
})
export class KitPointerModule {
}
