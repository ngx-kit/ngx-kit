import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiScrollModule } from '../ui-scroll.module';
import { UiScrollDemoComponent } from './ui-scroll-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiScrollModule,
  ],
  declarations: [
    UiScrollDemoComponent,
  ],
})
export class UiScrollDemoModule {
}
