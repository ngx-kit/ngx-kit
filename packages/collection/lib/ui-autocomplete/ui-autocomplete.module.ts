import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitFocusListenerModule, KitOverlayModule, KitPositionModule, KitValueAccessorModule } from '@ngx-kit/core';
import { UiAutocompleteOptionsComponent } from './ui-autocomplete-options/ui-autocomplete-options.component';
import { UiAutocompleteDirective } from './ui-autocomplete/ui-autocomplete.directive';

@NgModule({
  imports: [
    CommonModule,
    KitPositionModule,
    KitFocusListenerModule,
  ],
  declarations: [
    UiAutocompleteDirective,
    UiAutocompleteOptionsComponent,
  ],
  exports: [
    UiAutocompleteDirective,
    KitValueAccessorModule,
    KitOverlayModule,
  ],
  entryComponents: [
    UiAutocompleteOptionsComponent,
  ],
})
export class UiAutocompleteModule {
}
