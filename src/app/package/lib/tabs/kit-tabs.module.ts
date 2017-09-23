import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitSlideModule } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { KitTabsPanelComponent } from './kit-tabs-panel/kit-tabs-panel.component';
import { KitTabsComponent } from './kit-tabs/kit-tabs.component';

const exp = [
  KitTabsComponent,
  KitTabsPanelComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitSlideModule,
    KitCommonModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitTabsModule {
}
