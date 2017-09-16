import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StylerModule } from '@ngx-kit/styler';
import { UiDefaultFullModule } from '@ngx-kit/ui-default';
import { SharedModule } from '../shared/shared.module';
import { UiDefaultRoutingModule } from './ui-default-routing.module';
import { UiDefaultComponent } from './ui-default/ui-default.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StylerModule,
    UiDefaultFullModule,
    UiDefaultRoutingModule,
  ],
  declarations: [
    UiDefaultComponent,
  ],
})
export class UiDefaultModule {
}
