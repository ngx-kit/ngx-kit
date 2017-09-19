import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitClassDirective } from './kit-class.directive';
import { KitMultiOutletDirective } from './kit-multi-outlet.directive';
import { KitTreeClickDirective } from './kit-tree-click.directive';

const exports = [
  KitMultiOutletDirective,
  KitTreeClickDirective,
  KitClassDirective,
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
