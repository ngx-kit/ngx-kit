import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitIconsModule, KitLoadingBarService } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { lib } from '../../packages/ui-base/src/lib/lib';
import { SharedModule } from '../shared/shared.module';
import { UiBaseRoutingModule } from './ui-base-routing.module';
import { UiBaseComponent } from './ui-base/ui-base.component';
import { UiModulePageComponent } from './ui-module-page/ui-module-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StylerModule,
    UiBaseRoutingModule,
    KitIconsModule,
    ...lib,
  ],
  declarations: [
    UiBaseComponent,
    UiModulePageComponent,
  ],
  providers: [
    KitLoadingBarService,
  ],
})
export class UiBaseModule {
}
