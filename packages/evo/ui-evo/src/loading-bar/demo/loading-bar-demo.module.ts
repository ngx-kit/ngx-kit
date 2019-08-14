import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingBarModule } from '../loading-bar.module';
import { LoadingBarDemoComponent } from './loading-bar-demo.component';

@NgModule({
  imports: [
    CommonModule,
    LoadingBarModule,
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
