import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitFullModule, } from '@ngx-kit/ngx-kit';
import { SharedModule } from '../shared/shared.module';
import { KitRoutingModule } from './kit-routing.module';
import { KitComponent } from './kit/kit.component';
import { AccordionComponent } from './modules/accordion/accordion.component';
import { AutoCompleteComponent } from './modules/auto-complete/auto-complete.component';
import { BadgeComponent } from './modules/badge/badge.component';
import { ButtonsComponent } from './modules/buttons/buttons.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    KitRoutingModule,
    KitFullModule,
  ],
  declarations: [
    KitComponent,
    ButtonsComponent,
    AccordionComponent,
    AutoCompleteComponent,
    BadgeComponent,
  ],
})
export class KitModule {
}
