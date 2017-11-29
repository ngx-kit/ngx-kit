import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitMultiOutletDirective } from './kit-multi-outlet/kit-multi-outlet.directive';
import { KitRepeatDirective } from './kit-repeat/kit-repeat.directive';
import { KitTreeClickDirective } from './tree-click/kit-tree-click.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KitMultiOutletDirective,
    KitRepeatDirective,
    KitTreeClickDirective,
  ],
  declarations: [
    KitMultiOutletDirective,
    KitRepeatDirective,
    KitTreeClickDirective,
  ],
})
export class KitCommonModule {
}
