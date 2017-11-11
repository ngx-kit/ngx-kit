import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitIconsModule } from '@ngx-kit/core';
import { StylerModule } from '@ngx-kit/styler';
import { SharedModule } from '../../shared/shared.module';
import { CorePackageRoutingModule } from './core-package-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StylerModule,
    CorePackageRoutingModule,
    KitIconsModule,
  ],
  declarations: [
    MainComponent,
  ],
  providers: [],
})
export class CorePackageModule {
}
