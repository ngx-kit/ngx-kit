import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentResolverService } from './content-resolver.service';
import { ThemeService } from './theme.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ThemeService,
    ContentResolverService,
  ]
})
export class CoreModule {
}
