import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= classify(name) %>DemoComponent } from './<%= dasherize(name) %>-demo.component';
import { <%= classify(name) %>Module } from '../<%= dasherize(name) %>.module';

@NgModule({
  imports: [
    CommonModule,
    <%= classify(name) %>Module,
  ],
  declarations: [
    <%= classify(name) %>DemoComponent,
  ],
  entryComponents: [
    <%= classify(name) %>DemoComponent,
  ],
})
export class <%= classify(name) %>DemoModule {
}
