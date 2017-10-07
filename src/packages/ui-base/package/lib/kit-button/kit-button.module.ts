import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitButtonGroupComponent } from './kit-button-group/kit-button-group.component';
import { KitButtonComponent } from './kit-button/kit-button.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KitButtonComponent,
    KitButtonGroupComponent,
  ],
  declarations: [
    KitButtonComponent,
    KitButtonGroupComponent,
  ],
})
export class KitButtonModule {
}
