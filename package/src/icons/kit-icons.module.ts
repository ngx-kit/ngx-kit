import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitIconComponent } from './kit-icon/kit-icon.component';
import { KitIconsRegistryService } from './kit-icons-registry.service';

const exports = [
  KitIconComponent,
];

/**
 * @todo register icons in forRoot().
 */
@NgModule({
  imports: [
    HttpClientModule,
  ],
  exports: [
    ...exports,
  ],
  declarations: [
    ...exports,
  ],
  providers: [],
})
export class KitIconsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitIconsModule,
      providers: [KitIconsRegistryService],
    };
  }
}
