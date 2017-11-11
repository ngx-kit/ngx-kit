import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentResolverService } from './content-resolver.service';
import { ContentService } from './content.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    ContentService,
    ContentResolverService,
  ],
})
export class CoreModule {
}
