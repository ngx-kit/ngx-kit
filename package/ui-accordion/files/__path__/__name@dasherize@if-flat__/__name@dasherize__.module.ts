import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule } from '@ngx-kit/ngx-kit';
import { <%= classify(name) %>ContentComponent } from './<%= dasherize(name) %>-content/<%= dasherize(name) %>-content.component';
import { <%= classify(name) %>PanelComponent } from './<%= dasherize(name) %>-panel/<%= dasherize(name) %>-panel.component';
import { <%= classify(name) %>TitleComponent } from './<%= dasherize(name) %>-title/<%= dasherize(name) %>-title.component';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>/<%= dasherize(name) %>.component';

@NgModule({
  imports: [
    CommonModule,
    KitCollapseModule,
  ],
  exports: [
    <%= classify(name) %>Component,
    <%= classify(name) %>PanelComponent,
    <%= classify(name) %>TitleComponent,
    <%= classify(name) %>ContentComponent,
  ],
  declarations: [
    <%= classify(name) %>Component,
    <%= classify(name) %>PanelComponent,
    <%= classify(name) %>TitleComponent,
    <%= classify(name) %>ContentComponent,
  ],
})
export class <%= classify(name) %>Module {
}
