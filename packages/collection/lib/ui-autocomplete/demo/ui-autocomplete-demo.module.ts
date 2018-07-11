import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiAutocompleteModule } from '../ui-autocomplete.module';
import { UiAutocompleteDemoComponent } from './ui-autocomplete-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiAutocompleteModule,
  ],
  declarations: [
    UiAutocompleteDemoComponent,
  ],
  entryComponents: [
    UiAutocompleteDemoComponent,
  ],
})
export class UiAutocompleteDemoModule {
}
