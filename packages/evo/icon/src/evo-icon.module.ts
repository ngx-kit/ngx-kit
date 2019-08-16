import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EvoIconComponent } from './evo-icon.component';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [
    EvoIconComponent,
  ],
  exports: [
    EvoIconComponent,
  ],
})
export class EvoIconModule {
}
