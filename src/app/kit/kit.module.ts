import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitDefaultThemeModule, KitFullModule, KitLoadingBarService, } from '@ngx-kit/ngx-kit';
import { SharedModule } from '../shared/shared.module';
import { KitRoutingModule } from './kit-routing.module';
import { KitComponent } from './kit/kit.component';
import { ModuleComponent } from './module/module.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    KitRoutingModule,
    KitFullModule,
    KitDefaultThemeModule,
  ],
  declarations: [
    KitComponent,
    ModuleComponent,
  ],
  providers: [
    KitLoadingBarService,
  ],
})
export class KitModule {
}
