import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconModule } from '@ngx-kit/evo/icon';
import { FocusListenerModule } from '@ngx-kit/evo/util';
import { SelectItemsComponent } from './select-items/select-items.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    IconModule,
    FocusListenerModule,
  ],
  declarations: [
    SelectComponent,
    SelectItemsComponent,
  ],
  entryComponents: [
    SelectItemsComponent,
  ],
  exports: [
    SelectComponent,
  ],
})
export class SelectModule {
}
