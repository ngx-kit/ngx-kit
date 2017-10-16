import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitLoadingBarService } from './kit-loading-bar.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class KitLoadingBarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitLoadingBarModule,
      providers: [KitLoadingBarService],
    };
  }
}
