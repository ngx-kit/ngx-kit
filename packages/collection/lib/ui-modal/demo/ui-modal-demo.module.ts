import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiModalModule } from '../ui-modal.module';
import { UiModalDemoBindingModalComponent } from './ui-modal-demo-binding-modal.component';
import { UiModalDemoCanCloseModalComponent } from './ui-modal-demo-can-close-modal.component';
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
    UiModalDemoBindingModalComponent,
    UiModalDemoCanCloseModalComponent,
  ],
  entryComponents: [
    UiModalDemoComponent,
    UiModalDemoModalComponent,
    UiModalDemoBindingModalComponent,
    UiModalDemoCanCloseModalComponent,
  ],
})
export class UiModalDemoModule {
}
