import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSlideModule } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>SlideComponent } from './<%= dasherize(name) %>-slide/<%= dasherize(name) %>-slide.component';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>/<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
  ],
  exports: [
    <%= classify(name) %>Component,
    <%= classify(name) %>SlideComponent,
  ],
  declarations: [
    <%= classify(name) %>Component,
    <%= classify(name) %>SlideComponent,
  ],
})
export class <%= classify(name) %>Module {
}
