import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponentsResolverService } from '../core/content-components-resolver.service';
import { ContentPostsResolverService } from '../core/content-posts-resolver.service';
import { ContentComponent } from '../shared/content/content.component';
import { KitComponent } from './kit/kit.component';
import { ModuleComponent } from './module/module.component';

const routes: Routes = [
  {
    path: '',
    component: KitComponent,
    resolve: {
      components: ContentComponentsResolverService,
      posts: ContentPostsResolverService,
    },
    children: [
      {
        path: '',
        component: ContentComponent,
        data: {
          post: 'OVERVIEW',
        },
      },
      {
        path: 'docs',
        children: [
          {
            path: 'importing',
            component: ContentComponent,
            data: {
              post: 'IMPORTING',
            },
          },
        ],
      },
      {
        path: 'modules/:module',
        component: ModuleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitRoutingModule {
}
