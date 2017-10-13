import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>GroupComponent } from './<%= dasherize(name) %>-group/<%= dasherize(name) %>-group.component';
import { <%= classify(name) %>ItemComponent } from './<%= dasherize(name) %>-item/<%= dasherize(name) %>-item.component';
import { <%= classify(name) %>SubComponent } from './<%= dasherize(name) %>-sub/<%= dasherize(name) %>-sub.component';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>/<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule,
    KitCollapseModule,
  ],
  exports: [
    <%= classify(name) %>Component,
    <%= classify(name) %>ItemComponent,
    <%= classify(name) %>GroupComponent,
    <%= classify(name) %>SubComponent,
  ],
  declarations: [
    <%= classify(name) %>Component,
    <%= classify(name) %>ItemComponent,
    <%= classify(name) %>GroupComponent,
    <%= classify(name) %>SubComponent,
  ],
  providers: [],
})
export class <%= classify(name) %>Module {
}
