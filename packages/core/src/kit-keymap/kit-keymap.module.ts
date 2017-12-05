import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitKeymapDirective } from './kit-keymap.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitKeymapDirective,
  ],
  exports: [
    KitKeymapDirective,
  ],
})
export class KitKeymapModule {
}
