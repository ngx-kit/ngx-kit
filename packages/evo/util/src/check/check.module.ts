import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckDirective } from './check.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CheckDirective,
  ],
  declarations: [
    CheckDirective,
  ],
})
export class CheckModule {
}
