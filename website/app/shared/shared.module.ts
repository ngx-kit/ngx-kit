import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { KitFullModule } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { demo } from '../../packages/ui-base/src/demo/demo';
import { lib } from '../../packages/ui-base/src/lib/lib';
import { ApiComponent } from './api/api.component';
import { ContentMenuComponent } from './content-menu/content-menu.component';
import { DemoComponent } from './demo/demo.component';
import { DocsPageComponent } from './docs-page/docs-page.component';
import { MdComponent } from './md/md.component';
import { ModulePageComponent } from './module-page/module-page.component';
import { TitleComponent } from './title/title.component';
import { KitTabsModule } from './ws-kit/tabs/kit-tabs.module';

const exp = [
  DocsPageComponent,
  MdComponent,
  DemoComponent,
  TitleComponent,
  ApiComponent,
  ContentMenuComponent,
  ModulePageComponent,
];
const wsKit = [
  KitTabsModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StylerModule,
    KitFullModule,
    ...wsKit,
    ...lib,
  ],
  declarations: [
    ...exp,
    ...demo,
  ],
  exports: [
    ...exp,
    ...wsKit,
  ],
  entryComponents: [
    ...demo,
  ],
})
export class SharedModule {
}
