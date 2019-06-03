import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoIconModule } from '@ngx-kit/evo/icon';
import { EvoButtonGroupComponent } from './evo-button-group/evo-button-group.component';
import { EvoButtonComponent } from './evo-button/evo-button.component';

@NgModule({
  imports: [
    CommonModule,
    EvoIconModule,
  ],
  declarations: [
    EvoButtonComponent,
    EvoButtonGroupComponent,
  ],
  exports: [
    EvoButtonComponent,
    EvoButtonGroupComponent,
  ],
})
export class EvoButtonModule {
}
