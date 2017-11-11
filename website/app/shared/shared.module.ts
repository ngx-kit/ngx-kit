import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { KitFullModule } from '@ngx-kit/core';
import { CollectionDemoModule } from '../../../packages/collection/demo/collection-demo.module';
import { ApiComponent } from './api/api.component';
import { ContentMenuComponent } from './content-menu/content-menu.component';
import { DemoComponent } from './demo/demo.component';
import { DocsPageComponent } from './docs-page/docs-page.component';
import { MdComponent } from './md/md.component';
import { ModulePageComponent } from './module-page/module-page.component';
import { TitleComponent } from './title/title.component';
import { KitTabsModule } from './ws-kit/tabs/kit-tabs.module';

const exports = [
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
    KitFullModule,
    CollectionDemoModule,
    ...wsKit,
  ],
  declarations: [
    ...exports,
  ],
  exports: [
    ...exports,
    ...wsKit,
  ],
})
export class SharedModule {
}
