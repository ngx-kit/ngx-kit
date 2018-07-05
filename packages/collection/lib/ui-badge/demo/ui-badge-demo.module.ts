import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiBadgeModule } from '../ui-badge.module';
import { UiBadgeDemoComponent } from './ui-badge-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiBadgeModule,
  ],
  declarations: [
    UiBadgeDemoComponent,
  ],
  entryComponents: [
    UiBadgeDemoComponent,
  ],
})
export class UiBadgeDemoModule {
}
