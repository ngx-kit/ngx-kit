import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content/content.component';
import { ContentOutputComponent } from './content-output/content-output.component';
import { DemoComponent } from './demo/demo.component';
import { StylerModule } from '@ngx-kit/styler';

const exported = [
  ContentComponent,
  ContentOutputComponent,
  DemoComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
  ],
  declarations: exported,
  exports: exported,
})
export class SharedModule {
}
