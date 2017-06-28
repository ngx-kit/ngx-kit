import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { ContentOutputComponent } from './content-output/content-output.component';
import { ContentComponent } from './content/content.component';
import { DemoComponent } from './demo/demo.component';

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
