import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { <%= classify(name) %>GroupComponent } from './<%= dasherize(name) %>-group/<%= dasherize(name) %>-group.component';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>/<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    <%= classify(name) %>Component,
    <%= classify(name) %>GroupComponent,
  ],
  declarations: [
    <%= classify(name) %>Component,
    <%= classify(name) %>GroupComponent,
  ],
})
export class <%= classify(name) %>Module {
}
