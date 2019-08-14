import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IconComponent } from './icon.component';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [
    IconComponent,
  ],
  exports: [
    IconComponent,
  ],
})
export class IconModule {
}
