import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitPointerModule } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>/<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
    KitPointerModule,
  ],
  exports: [
    <%= classify(name) %>Component,
  ],
  declarations: [
    <%= classify(name) %>Component,
  ],
  providers: [],
})
export class <%= classify(name) %>Module {
}
