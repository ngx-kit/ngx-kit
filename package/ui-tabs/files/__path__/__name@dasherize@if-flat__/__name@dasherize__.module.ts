import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSlideModule } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>ContentComponent } from './<%= dasherize(name) %>-content/<%= dasherize(name) %>-content.component';
import { <%= classify(name) %>NavComponent } from './<%= dasherize(name) %>-nav/<%= dasherize(name) %>-nav.component';
import { <%= classify(name) %>TabComponent } from './<%= dasherize(name) %>-tab/<%= dasherize(name) %>-tab.component';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>/<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
  ],
  exports: [
    <%= classify(name) %>Component,
    <%= classify(name) %>NavComponent,
    <%= classify(name) %>TabComponent,
    <%= classify(name) %>ContentComponent,
  ],
  declarations: [
    <%= classify(name) %>Component,
    <%= classify(name) %>NavComponent,
    <%= classify(name) %>TabComponent,
    <%= classify(name) %>ContentComponent,
  ],
})
export class <%= classify(name) %>Module {
}
