import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule } from '@ngx-kit/core';
import { UiLoadingBarComponent } from './ui-loading-bar/ui-loading-bar.component';

@NgModule({
  imports: [
    CommonModule,
    KitCollapseModule,
  ],
  declarations: [
    UiLoadingBarComponent,
  ],
  exports: [
    KitCollapseModule,
    UiLoadingBarComponent,
  ],
})
export class UiLoadingBarModule {
}
