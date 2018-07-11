import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCheckModule, KitIconsModule } from '@ngx-kit/core';
import { UiButtonGroupComponent } from './ui-button-group/ui-button-group.component';
import { UiButtonComponent } from './ui-button/ui-button.component';

@NgModule({
  imports: [
    CommonModule,
    KitIconsModule,
  ],
  declarations: [
    UiButtonComponent,
    UiButtonGroupComponent,
  ],
  exports: [
    KitCheckModule,
    UiButtonComponent,
    UiButtonGroupComponent,
  ],
})
export class UiButtonModule {
}
