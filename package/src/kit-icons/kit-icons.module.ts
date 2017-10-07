import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitIconComponent } from './kit-icon/kit-icon.component';
import { KitIconsRegistryService } from './kit-icons-registry.service';

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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitIconsModule,
      providers: [KitIconsRegistryService],
    };
  }
}
