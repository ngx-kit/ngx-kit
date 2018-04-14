import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayService, KitValueAccessorModule } from '@ngx-kit/core';
import { UiAutocompleteOptionsComponent } from './ui-autocomplete-options/ui-autocomplete-options.component';
import { UiAutocompleteDirective } from './ui-autocomplete/ui-autocomplete.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiAutocompleteDirective,
    UiAutocompleteOptionsComponent,
  ],
  exports: [
    UiAutocompleteDirective,
    KitValueAccessorModule,
  ],
  entryComponents: [
    UiAutocompleteOptionsComponent,
  ],
  providers: [
    KitOverlayService,
  ],
})
export class UiAutocompleteModule {
}
