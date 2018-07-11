import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDrawerModule } from '../ui-drawer.module';
import { UiDrawerDemoComponent } from './ui-drawer-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiDrawerModule,
  ],
  declarations: [
    UiDrawerDemoComponent,
  ],
  entryComponents: [
    UiDrawerDemoComponent,
  ],
})
export class UiDrawerDemoModule {
}
