import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitIconsModule } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>/<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
    KitIconsModule,
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
