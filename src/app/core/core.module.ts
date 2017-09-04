import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentApiResolverService } from './content-api-resolver.service';
import { ContentComponentsResolverService } from './content-components-resolver.service';
import { ContentPostsResolverService } from './content-posts-resolver.service';
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
    ContentComponentsResolverService,
    ContentPostsResolverService,
    ContentApiResolverService,
  ],
})
export class CoreModule {
}
