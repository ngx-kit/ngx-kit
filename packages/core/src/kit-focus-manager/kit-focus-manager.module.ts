import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitFocusManagerRegistryService } from './kit-focus-manager-registry.service';
import { KitFocusTrapDirective } from './kit-focus-trap/kit-focus-trap.directive';
import { KitFocusDirective } from './kit-focus/kit-focus.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitFocusDirective,
    KitFocusTrapDirective,
  ],
  exports: [
    KitFocusDirective,
    KitFocusTrapDirective,
  ],
})
export class KitFocusManagerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitFocusManagerModule,
      providers: [
        KitFocusManagerRegistryService,
      ],
    };
  }
}
