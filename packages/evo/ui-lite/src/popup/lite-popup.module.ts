import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LitePopupToggleDirective } from './popup-toggle/lite-popup-toggle.directive';
import { LitePopupComponent } from './popup/lite-popup.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
  ],
  declarations: [
    LitePopupComponent,
    LitePopupToggleDirective,
  ],
  entryComponents: [
    LitePopupComponent,
  ],
  exports: [
    LitePopupComponent,
    LitePopupToggleDirective,
  ],
})
export class LitePopupModule {
}
