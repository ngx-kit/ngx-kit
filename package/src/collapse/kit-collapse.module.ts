import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCollapseGroupComponent } from './kit-collapse-group.component';
import { KitCollapseComponent } from './kit-collapse.component';

const exports = [
  KitCollapseComponent,
  KitCollapseGroupComponent,
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
export class KitCollapseModule {
}
