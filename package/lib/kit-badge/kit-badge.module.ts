import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitBadgeComponent } from './kit-badge/kit-badge.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KitBadgeComponent,
  ],
  declarations: [
    KitBadgeComponent,
  ],
})
export class KitBadgeModule {
}
