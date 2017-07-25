import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitLoadingBarComponent } from './kit-loading-bar.component';
import { KitLoadingBarService } from './kit-loading-bar.service';

const exported = [
  KitLoadingBarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCoreModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: [
    KitLoadingBarService,
  ],
})
export class KitLoadingBarModule {
}
