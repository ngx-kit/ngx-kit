import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentResolverService } from './content-resolver.service';
import { ContentService } from './content.service';
import { ThemeService } from './theme.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    ThemeService,
    ContentService,
    ContentResolverService,
  ],
})
export class CoreModule {
}
