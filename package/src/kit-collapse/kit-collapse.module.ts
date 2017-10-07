import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseDirective } from './kit-collapse/kit-collapse.directive';

const exp = [
  KitCollapseDirective,
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
export class KitCollapseModule {
}
