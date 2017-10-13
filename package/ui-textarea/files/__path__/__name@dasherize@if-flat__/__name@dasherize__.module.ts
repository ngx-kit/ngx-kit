import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>/<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    <%= classify(name) %>Component,
  ],
  declarations: [
    <%= classify(name) %>Component,
  ],
})
export class <%= classify(name) %>Module {
}
