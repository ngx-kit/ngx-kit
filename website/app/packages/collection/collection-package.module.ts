import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitIconsModule, KitLoadingBarService } from '@ngx-kit/core';
import { StylerModule } from '@ngx-kit/styler';
import { CollectionLibModule } from '../../../../packages/collection/lib/collection-lib.module';
import { SharedModule } from '../../shared/shared.module';
import { CollectionPackageRoutingModule } from './collection-package-routing.module';
import { MainComponent } from './main/main.component';
import { UiModulePageComponent } from './ui-module-page/ui-module-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StylerModule,
    CollectionPackageRoutingModule,
    KitIconsModule,
    CollectionLibModule,
  ],
  declarations: [
    MainComponent,
    UiModulePageComponent,
  ],
  providers: [
    KitLoadingBarService,
  ],
})
export class CollectionPackageModule {
}
