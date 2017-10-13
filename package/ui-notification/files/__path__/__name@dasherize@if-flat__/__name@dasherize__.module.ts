import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>HostComponent } from './<%= dasherize(name) %>-host/<%= dasherize(name) %>-host.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
  ],
  exports: [
    <%= classify(name) %>HostComponent,
  ],
  declarations: [
    <%= classify(name) %>HostComponent,
  ],
})
export class <%= classify(name) %>Module {
}
