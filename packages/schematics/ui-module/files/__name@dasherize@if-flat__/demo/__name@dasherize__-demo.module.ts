import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= classify(name) %>DemoComponent } from './<%= dasherize(name) %>-demo.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    <%= classify(name) %>DemoComponent,
  ],
})
export class <%= classify(name) %>DemoModule {
}
