import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitFormErrorComponent } from './kit-form-error.component';
import { KitFormGroupComponent } from './kit-form-group.component';
import { KitFormLabelComponent } from './kit-form-label.component';
import { KitFormTouchComponent } from './kit-form-touch.directive';

const exported = [
  KitFormErrorComponent,
  KitFormGroupComponent,
  KitFormLabelComponent,
  KitFormTouchComponent,
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
export class KitFormModule {
}
