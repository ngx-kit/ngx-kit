import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingBarComponent } from './loading-bar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoadingBarComponent,
  ],
  exports: [
    LoadingBarComponent,
  ],
})
export class LoadingBarModule {
}
