import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayModule } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>/<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule,
    KitOverlayModule,
  ],
  declarations: [
    <%= classify(name) %>Component,
  ],
  exports: [
    <%= classify(name) %>Component,
  ],
})
export class <%= classify(name) %>Module {
}
