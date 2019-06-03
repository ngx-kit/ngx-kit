import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoLoadingBarModule } from '../evo-loading-bar/evo-loading-bar.module';
import { EvoLoadingDemoComponent } from './evo-loading-demo.component';

@NgModule({
  imports: [
    CommonModule,
    EvoLoadingBarModule,
  ],
  declarations: [
    EvoLoadingDemoComponent,
  ],
  entryComponents: [
    EvoLoadingDemoComponent,
  ],
})
export class EvoLoadingDemoModule {
}
