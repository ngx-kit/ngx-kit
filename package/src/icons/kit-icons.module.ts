import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { KitIconComponent } from './kit-icon.component';
import { KitIconsRegistryService } from './kit-icons-registry.service';

const exported = [
  KitIconComponent,
];

/**
 * @todo register icons in forRoot().
 */
@NgModule({
  imports: [
    HttpModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
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
