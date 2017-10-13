import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiBadgeComponent } from './ui-badge/ui-badge.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    UiBadgeComponent,
  ],
  declarations: [
    UiBadgeComponent,
  ],
})
export class UiBadgeModule {
}
