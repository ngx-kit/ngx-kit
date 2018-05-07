import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CollectionDemoModule } from '../../../packages/collection/demo/collection-demo.module';
import { ApiComponent } from './api/api.component';
import { ContentMenuComponent } from './content-menu/content-menu.component';
import { DemoComponent } from './demo/demo.component';
import { DocsPageComponent } from './docs-page/docs-page.component';
import { MdComponent } from './md/md.component';
import { ModulePageComponent } from './module-page/module-page.component';
import { ScrollUpDirective } from './scroll-up/scroll-up.directive';
import { TitleComponent } from './title/title.component';
import { KitTabsModule } from './ws-kit/tabs/kit-tabs.module';
import { UiLoadingBarModule } from './ws-kit/ui-loading-bar/ui-loading-bar.module';

const exp = [
  DocsPageComponent,
  MdComponent,
  DemoComponent,
  TitleComponent,
  ApiComponent,
  ContentMenuComponent,
  ModulePageComponent,
  ScrollUpDirective,
];
const wsKit = [
  KitTabsModule,
  UiLoadingBarModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CollectionDemoModule,
    ...wsKit,
  ],
  declarations: [
    ...exp,
  ],
  exports: [
    ...exp,
    ...wsKit,
  ],
})
export class SharedModule {
}
