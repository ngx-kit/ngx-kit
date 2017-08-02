import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitAlertTitleComponent } from './kit-alert-title.component';
import { KitAlertComponent } from './kit-alert.component';

const exported = [
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
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: [],
})
export class KitAlertModule {
}
