import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitClassModule, KitOverlayModule } from '@ngx-kit/core';
import { UiDrawerComponent } from './ui-drawer/ui-drawer.component';

@NgModule({
  imports: [
    CommonModule,
    KitClassModule,
  ],
  declarations: [
    UiDrawerComponent,
  ],
  exports: [
    UiDrawerComponent,
    KitOverlayModule,
  ],
})
export class UiDrawerModule {
}
