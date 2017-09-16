import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StylerModule } from '@ngx-kit/styler';
import { UiDefaultFullModule } from '@ngx-kit/ui-default';
import { demoComponents } from '../demo/ui-default-src/demo';
import { ApiComponent } from './api/api.component';
import { ContentMenuComponent } from './content-menu/content-menu.component';
import { DemoComponent } from './demo/demo.component';
import { DocsPageComponent } from './docs-page/docs-page.component';
import { MdComponent } from './md/md.component';
import { ModulePageComponent } from './module-page/module-page.component';
import { TitleComponent } from './title/title.component';

const exported = [
  DocsPageComponent,
  MdComponent,
  DemoComponent,
  TitleComponent,
  ApiComponent,
  ContentMenuComponent,
  ModulePageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StylerModule,
    UiDefaultFullModule,
  ],
  declarations: [
    ...exported,
    ...demoComponents,
  ],
  exports: [
    ...exported,
  ],
  entryComponents: [
    ...demoComponents,
  ],
})
export class SharedModule {
}
