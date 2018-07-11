import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitIconsRegistryService } from '@ngx-kit/core';
import { UiBreadcrumbsModule } from '../ui-breadcrumbs.module';
import { UiBreadcrumbsDemoComponent } from './ui-breadcrumbs-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiBreadcrumbsModule,
  ],
  declarations: [
    UiBreadcrumbsDemoComponent,
  ],
  entryComponents: [
    UiBreadcrumbsDemoComponent,
  ],
})
export class UiBreadcrumbsDemoModule {
  constructor(private icons: KitIconsRegistryService) {
    this.icons.add({name: 'star', url: '/assets/star-icon.svg'});
  }
}
