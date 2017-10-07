import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitAnchorDirective } from './kit-anchor/kit-anchor.directive';
import { KitClassDirective } from './kit-class/kit-class.directive';
import { KitMultiOutletDirective } from './kit-multi-outlet/kit-multi-outlet.directive';
import { KitRepeatDirective } from './kit-repeat/kit-repeat.directive';
import { KitTreeClickDirective } from './kit-tree-click.directive';

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
  ],
  exports: [
    KitAnchorDirective,
    KitClassDirective,
    KitMultiOutletDirective,
    KitRepeatDirective,
    KitTreeClickDirective,
  ],
  declarations: [
    KitAnchorDirective,
    KitClassDirective,
    KitMultiOutletDirective,
    KitRepeatDirective,
    KitTreeClickDirective,
  ],
})
export class KitCommonModule {
}
