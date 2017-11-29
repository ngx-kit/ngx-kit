import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitClassDirective } from './kit-class/kit-class.directive';
import { KitMultiOutletDirective } from './kit-multi-outlet/kit-multi-outlet.directive';
import { KitRepeatDirective } from './kit-repeat/kit-repeat.directive';
import { KitTreeClickDirective } from './tree-click/kit-tree-click.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KitClassDirective,
    KitMultiOutletDirective,
    KitRepeatDirective,
    KitTreeClickDirective,
  ],
  declarations: [
    KitClassDirective,
    KitMultiOutletDirective,
    KitRepeatDirective,
    KitTreeClickDirective,
  ],
})
export class KitCommonModule {
}
