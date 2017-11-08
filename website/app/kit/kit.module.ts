import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitIconsModule } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
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
    StylerModule,
    KitRoutingModule,
    KitIconsModule,
  ],
  declarations: [
    KitComponent,
    ModuleComponent,
  ],
  providers: [],
})
export class KitModule {
}
