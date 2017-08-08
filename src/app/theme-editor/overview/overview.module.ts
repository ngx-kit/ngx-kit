import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitDefaultThemeModule, KitFullModule, KitLoadingBarService, } from '@ngx-kit/ngx-kit';
import { SharedModule } from '../../shared/shared.module';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    KitFullModule,
    KitDefaultThemeModule.forRoot(),
    OverviewRoutingModule,
  ],
  declarations: [
    OverviewComponent,
  ],
  providers: [
    KitLoadingBarService,
  ],
})
export class OverviewModule {
}
