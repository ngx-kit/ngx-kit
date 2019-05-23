import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiModalModule } from '../ui-modal.module';
import { UiModalDemoModalComponent } from './ui-modal-demo-modal.component';
import { UiModalDemoComponent } from './ui-modal-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModalModule,
  ],
  declarations: [
    UiModalDemoComponent,
    UiModalDemoModalComponent,
  ],
  entryComponents: [
    UiModalDemoComponent,
    UiModalDemoModalComponent,
  ],
})
export class UiModalDemoModule {
}
