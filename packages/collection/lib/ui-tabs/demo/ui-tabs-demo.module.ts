import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiTabsModule } from '../ui-tabs.module';
import { UiTabsDemoComponent } from './ui-tabs-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiTabsModule,
  ],
  declarations: [
    UiTabsDemoComponent,
  ],
})
export class UiTabsDemoModule {
}
