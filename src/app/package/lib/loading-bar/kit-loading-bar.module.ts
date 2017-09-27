import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { KitLoadingBarComponent } from './kit-loading-bar/kit-loading-bar.component';

const exp = [
  KitLoadingBarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCollapseModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitLoadingBarModule {
}
