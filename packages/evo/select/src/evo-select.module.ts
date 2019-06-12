import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvoFocusListenerModule } from '@ngx-kit/evo/focus-listener';
import { EvoIconModule } from '@ngx-kit/evo/icon';
import { EvoSelectItemsComponent } from './evo-select-items/evo-select-items.component';
import { EvoSelectComponent } from './evo-select/evo-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    EvoIconModule,
    EvoFocusListenerModule,
  ],
  declarations: [
    EvoSelectComponent,
    EvoSelectItemsComponent,
  ],
  entryComponents: [
    EvoSelectItemsComponent,
  ],
  exports: [
    EvoSelectComponent,
  ],
})
export class EvoSelectModule {
}
