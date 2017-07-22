import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitButtonGroupComponent } from './kit-button-group.component';
import { KitButtonComponent } from './kit-button.component';

const exported = [
  KitButtonComponent,
  KitButtonGroupComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCoreModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: [],
})
export class KitButtonsModule {
}
