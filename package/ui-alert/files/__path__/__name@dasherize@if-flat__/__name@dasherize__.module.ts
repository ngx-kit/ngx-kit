import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitSlideModule } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>TitleComponent } from './<%= dasherize(name) %>-title/<%= dasherize(name) %>-title.component';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>/<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
    KitCommonModule,
  ],
  exports: [
    <%= classify(name) %>Component,
    <%= classify(name) %>TitleComponent,
  ],
  declarations: [
    <%= classify(name) %>Component,
    <%= classify(name) %>TitleComponent,
  ],
})
export class <%= classify(name) %>Module {
}
