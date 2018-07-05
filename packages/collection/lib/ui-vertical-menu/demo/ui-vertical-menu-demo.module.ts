import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiVerticalMenuModule } from '../ui-vertical-menu.module';
import { UiVerticalMenuDemoComponent } from './ui-vertical-menu-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiVerticalMenuModule,
  ],
  declarations: [
    UiVerticalMenuDemoComponent,
  ],
  entryComponents: [
    UiVerticalMenuDemoComponent,
  ],
})
export class UiVerticalMenuDemoModule {
}
