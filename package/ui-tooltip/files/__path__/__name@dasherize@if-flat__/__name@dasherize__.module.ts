import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayModule } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>ViewComponent } from './<%= dasherize(name) %>-view/<%= dasherize(name) %>-view.component';
import { <%= classify(name) %>Directive } from './<%= dasherize(name) %>/<%= dasherize(name) %>.directive';

@NgModule({
  imports: [
    CommonModule,
    KitOverlayModule,
  ],
  exports: [
    <%= classify(name) %>Directive,
  ],
  declarations: [
    <%= classify(name) %>Directive,
    <%= classify(name) %>ViewComponent,
  ],
  entryComponents: [
    <%= classify(name) %>ViewComponent,
  ],
})
export class <%= classify(name) %>Module {
}
