import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { KitIconComponent } from './kit-icon/kit-icon.component';

/**
 * @todo register icons in forRoot().
 */
@NgModule({
  imports: [
    HttpClientModule,
  ],
  exports: [
    KitIconComponent,
  ],
  declarations: [
    KitIconComponent,
  ],
})
export class KitIconsModule {
}
