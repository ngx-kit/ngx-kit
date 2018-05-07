import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectionLibModule } from '../lib/collection-lib.module';
import { demoComponents } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollectionLibModule,
  ],
  declarations: [
    ...demoComponents,
  ],
  exports: [
    ...demoComponents,
  ],
  entryComponents: [
    ...demoComponents,
  ],
})
export class CollectionDemoModule {
}
