import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitAnchorDirective } from './kit-anchor/kit-anchor.directive';
import { KitClassDirective } from './kit-class/kit-class.directive';
import { KitMultiOutletDirective } from './kit-multi-outlet/kit-multi-outlet.directive';
import { KitRepeatDirective } from './kit-repeat/kit-repeat.directive';
import { KitTreeClickDirective } from './kit-tree-click.directive';

const exports = [
  KitAnchorDirective,
  KitClassDirective,
  KitMultiOutletDirective,
  KitRepeatDirective,
  KitTreeClickDirective,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
  ],
  exports: [
    ...exports,
  ],
  declarations: [
    ...exports,
  ],
  entryComponents: [],
  providers: [],
})
export class KitCommonModule {
}
