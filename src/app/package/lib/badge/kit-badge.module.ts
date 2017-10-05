import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitBadgeComponent } from './kit-badge/kit-badge.component';

const exp = [
  KitBadgeComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitBadgeModule {
}
