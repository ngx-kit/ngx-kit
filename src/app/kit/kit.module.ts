import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitLayoutModule } from '@ngx-kit/layout';
import { KitNavigationModule } from '@ngx-kit/navigation';

import { KitRoutingModule } from './kit-routing.module';
import { KitComponent } from './kit/kit.component';
import { OverlayComponent } from './core/overlay/overlay.component';
import { ButtonComponent } from './buttons/button/button.component';
import { ButtonGroupComponent } from './buttons/button-group/button-group.component';
import { DropdownMenuComponent } from './buttons/dropdown-menu/dropdown-menu.component';
import { SharedModule } from '../shared/shared.module';
import { KitButtonsModule } from '@ngx-kit/buttons';
import { StylerModule } from '@ngx-kit/styler';

@NgModule({
  imports: [
    // angular
    CommonModule,
    // kit
    StylerModule,
    KitRoutingModule,
    KitLayoutModule,
    KitNavigationModule,
    KitButtonsModule,
    // app
    SharedModule,
  ],
  declarations: [
    KitComponent,
    OverlayComponent,
    ButtonComponent,
    ButtonGroupComponent,
    DropdownMenuComponent,
  ],
})
export class KitModule {
}
