import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvoIconModule } from '@ngx-kit/evo/icon';
import { EvoFocusListenerModule } from '@ngx-kit/evo/util';
import { LiteSelectItemsComponent } from './select-items/lite-select-items.component';
import { LiteSelectComponent } from './select/lite-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    EvoIconModule,
    EvoFocusListenerModule,
  ],
  declarations: [
    LiteSelectComponent,
    LiteSelectItemsComponent,
  ],
  entryComponents: [
    LiteSelectItemsComponent,
  ],
  exports: [
    LiteSelectComponent,
  ],
})
export class LiteSelectModule {
}
