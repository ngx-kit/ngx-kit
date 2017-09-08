import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitSlideHostComponent } from './kit-slide-host.component';
import { KitSlideComponent } from './kit-slide.component';

const exports = [
  KitSlideComponent,
  KitSlideHostComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
  ],
  exports: [
    ...exports,
  ],
  declarations: [
    ...exports,
  ],
  entryComponents: [],
  providers: [],
})
export class KitSlideModule {
}
