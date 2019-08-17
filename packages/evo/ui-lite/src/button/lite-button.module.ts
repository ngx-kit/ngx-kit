import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoIconModule } from '@ngx-kit/evo/icon';
import { EvoCheckModule } from '@ngx-kit/evo/util';
import { LiteButtonGroupComponent } from './button-group/lite-button-group.component';
import { LiteButtonComponent } from './button/lite-button.component';

@NgModule({
  imports: [
    CommonModule,
    EvoIconModule,
  ],
  declarations: [
    LiteButtonComponent,
    LiteButtonGroupComponent,
  ],
  exports: [
    LiteButtonComponent,
    LiteButtonGroupComponent,
    EvoCheckModule,
  ],
})
export class LiteButtonModule {
}
