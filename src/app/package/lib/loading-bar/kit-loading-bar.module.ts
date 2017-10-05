import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule } from '@ngx-kit/ngx-kit';
import { KitLoadingBarComponent } from './kit-loading-bar/kit-loading-bar.component';

const exp = [
  KitLoadingBarComponent,
];

@NgModule({
  imports: [
    CommonModule,
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
