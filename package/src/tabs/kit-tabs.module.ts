import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitTabsPanelComponent } from './kit-tabs-panel.component';
import { KitTabsComponent } from './kit-tabs.component';

const exported = [
  KitTabsComponent,
  KitTabsPanelComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCoreModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: [],
})
export class KitTabsModule {
}
