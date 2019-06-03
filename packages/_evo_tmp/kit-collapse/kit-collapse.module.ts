import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseDirective } from './kit-collapse/kit-collapse.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KitCollapseDirective,
  ],
  declarations: [
    KitCollapseDirective,
  ],
})
export class KitCollapseModule {
}
