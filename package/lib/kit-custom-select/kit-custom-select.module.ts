import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayModule } from '@ngx-kit/ngx-kit';
import { KitCustomSelectComponent } from './kit-custom-select/kit-custom-select.component';

@NgModule({
  imports: [
    CommonModule,
    KitOverlayModule,
  ],
  declarations: [
    KitCustomSelectComponent,
  ],
  exports: [
    KitCustomSelectComponent,
  ],
})
export class KitCustomSelectModule {
}
