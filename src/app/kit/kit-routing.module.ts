import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentResolverService } from '../core/content-resolver.service';
import { ContentComponent } from '../shared/content/content.component';
import { KitComponent } from './kit/kit.component';
import { ButtonsComponent } from './modules/buttons/buttons.component';
import { AccordionComponent } from './modules/accordion/accordion.component';
import { AutoCompleteComponent } from './modules/auto-complete/auto-complete.component';
import { BadgeComponent } from './modules/badge/badge.component';

const routes: Routes = [
  {
    path: '',
    component: KitComponent,
    children: [
      {
        path: '',
        component: ContentComponent,
        data: {
          content: 'kit/overview.json',
        },
        resolve: {
          content: ContentResolverService,
        },
      },
      {
        path: 'getting-started',
        component: ContentComponent,
        data: {
          content: 'kit/getting-started.json',
        },
        resolve: {
          content: ContentResolverService,
        },
      },
      {
        path: 'modules',
        children: [
          {
            path: 'accordion',
            component: AccordionComponent,
            data: {
              content: 'kit/accordion.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'auto-complete',
            component: AutoCompleteComponent,
            data: {
              content: 'kit/auto-complete.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'badge',
            component: BadgeComponent,
            data: {
              content: 'kit/badge.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'buttons',
            component: ButtonsComponent,
            data: {
              content: 'kit/buttons.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
        ],
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
