import { NgModule } from '@angular/core';

import { KitButtonComponent } from './kit-button/kit-button.component';

const external = [
  KitButtonComponent,
];

@NgModule({
  imports: [],
  exports: external,
  declarations: [
    ...external,
  ],
  providers: []
})
export class KitButtonModule {
}
