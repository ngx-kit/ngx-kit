import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule } from '@ngx-kit/ngx-kit';
import { KitLoadingBarComponent } from './kit-loading-bar/kit-loading-bar.component';

@NgModule({
  imports: [
    CommonModule,
    KitCollapseModule,
  ],
  exports: [
    KitLoadingBarComponent,
  ],
  declarations: [
    KitLoadingBarComponent,
  ],
})
export class KitLoadingBarModule {
}
