import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitButtonsModule } from '@ngx-kit/buttons';
import { KitLayoutModule } from '@ngx-kit/layout';
import { KitNavigationModule } from '@ngx-kit/navigation';
import { StylerModule } from '@ngx-kit/styler';
import { SharedModule } from '../shared/shared.module';
import { ButtonGroupComponent } from './buttons/button-group/button-group.component';
import { ButtonComponent } from './buttons/button/button.component';
import { DropdownMenuComponent } from './buttons/dropdown-menu/dropdown-menu.component';
import { OverlayComponent } from './core/overlay/overlay.component';
import { KitRoutingModule } from './kit-routing.module';
import { KitComponent } from './kit/kit.component';

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
