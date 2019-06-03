import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvoIconModule } from '@ngx-kit/core';
import { CollectionLibModule } from '../../../../packages/collection/lib/collection-lib.module';
import { ContentServiceBase } from '../../content/content';
import { SharedModule } from '../../shared/shared.module';
import { CollectionContentService } from './collection-content.service';
import { CollectionPackageRoutingModule } from './collection-package-routing.module';
import { MainComponent } from './main/main.component';
import { UiModulePageComponent } from './ui-module-page/ui-module-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CollectionPackageRoutingModule,
    EvoIconModule,
    CollectionLibModule,
  ],
  declarations: [
    MainComponent,
    UiModulePageComponent,
  ],
  providers: [
    {
      provide: ContentServiceBase,
      useClass: CollectionContentService,
    },
  ],
})
export class CollectionPackageModule {
}
