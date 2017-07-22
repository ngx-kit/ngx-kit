import { NgModule } from '@angular/core';
import { KitLayoutContentComponent } from './kit-layout-content.component';
import { KitLayoutFooterComponent } from './kit-layout-footer.component';
import { KitLayoutHeaderComponent } from './kit-layout-header.component';
import { KitLayoutSideComponent } from './kit-layout-side.component';
import { KitLayoutComponent } from './kit-layout.component';

const exported = [
  KitLayoutComponent,
  KitLayoutContentComponent,
  KitLayoutFooterComponent,
  KitLayoutHeaderComponent,
  KitLayoutSideComponent,
];

@NgModule({
  imports: [],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: [],
})
export class KitLayoutModule {
}
