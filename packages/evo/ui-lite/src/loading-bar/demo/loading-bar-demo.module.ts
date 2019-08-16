import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LiteLoadingBarModule } from '../lite-loading-bar.module';
import { LoadingBarDemoComponent } from './loading-bar-demo.component';

@NgModule({
  imports: [
    CommonModule,
    LiteLoadingBarModule,
  ],
  declarations: [
    LoadingBarDemoComponent,
  ],
  entryComponents: [
    LoadingBarDemoComponent,
  ],
})
export class LoadingBarDemoModule {
}
