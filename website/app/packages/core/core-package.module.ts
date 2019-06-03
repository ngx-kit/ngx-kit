import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EvoIconModule } from '@ngx-kit/core';
import { ContentServiceBase } from '../../content/content';
import { SharedModule } from '../../shared/shared.module';
import { CoreContentService } from './core-content.service';
import { CorePackageRoutingModule } from './core-package-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CorePackageRoutingModule,
    EvoIconModule,
  ],
  declarations: [
    MainComponent,
  ],
  providers: [
    {
      provide: ContentServiceBase,
      useClass: CoreContentService,
    },
  ],
})
export class CorePackageModule {
}
