import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '@ngx-kit/evo/icon';
import { CheckModule } from '@ngx-kit/evo/util';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
  ],
  declarations: [
    ButtonComponent,
    ButtonGroupComponent,
  ],
  exports: [
    ButtonComponent,
    ButtonGroupComponent,
    CheckModule,
  ],
})
export class ButtonModule {
}
