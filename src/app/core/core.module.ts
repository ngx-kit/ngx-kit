import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentResolverService } from './content-resolver.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ContentResolverService,
  ]
})
export class CoreModule {
}
