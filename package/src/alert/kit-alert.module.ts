import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitAlertTitleComponent } from './kit-alert-title.component';
import { KitAlertComponent } from './kit-alert.component';

const exports = [
  KitAlertComponent,
  KitAlertTitleComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCoreModule,
  ],
  exports: [
    ...exports,
  ],
  declarations: [
    ...exports,
  ],
  providers: [],
})
export class KitAlertModule {
}
