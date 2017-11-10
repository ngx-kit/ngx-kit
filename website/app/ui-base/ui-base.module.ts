import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitIconsModule, KitLoadingBarService } from '@ngx-kit/core';
import { StylerModule } from '@ngx-kit/styler';
import { CollectionLibModule } from '../../../packages/collection/lib/collection-lib.module';
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
    CollectionLibModule,
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
