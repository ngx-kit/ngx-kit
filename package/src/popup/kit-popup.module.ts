import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCommonModule } from '../common/kit-common.module';
import { KitOverlayModule } from '../overlay/kit-overlay.module';
import { KitPopupViewComponent } from './kit-popup-view.component';
import { KitPopupDirective } from './kit-popup.directive';

const exports = [
  KitPopupDirective,
];
const entries = [
  KitPopupViewComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCommonModule,
    KitOverlayModule,
  ],
  exports: [
    ...exports,
  ],
  declarations: [
    ...exports,
    ...entries,
  ],
  entryComponents: [
    ...entries,
  ],
  providers: [],
})
export class KitPopupModule {
}
