import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentResolverService } from '../core/content-resolver.service';
import { ContentComponent } from '../shared/content/content.component';
import { KitComponent } from './kit/kit.component';
import { ModuleComponent } from './module/module.component';

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
            component: ModuleComponent,
            data: {
              module: 'accordion',
              content: 'kit/accordion.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'alert',
            component: ModuleComponent,
            data: {
              module: 'alert',
              content: 'kit/alert.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'auto-complete',
            component: ModuleComponent,
            data: {
              module: 'auto-complete',
              content: 'kit/auto-complete.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'badge',
            component: ModuleComponent,
            data: {
              module: 'badge',
              content: 'kit/badge.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'breadcrumb',
            component: ModuleComponent,
            data: {
              module: 'breadcrumb',
              content: 'kit/breadcrumb.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'button',
            component: ModuleComponent,
            data: {
              module: 'button',
              content: 'kit/button.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'checkbox',
            component: ModuleComponent,
            data: {
              module: 'checkbox',
              content: 'kit/checkbox.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'color-picker',
            component: ModuleComponent,
            data: {
              module: 'color-picker',
              content: 'kit/color-picker.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'date-picker',
            component: ModuleComponent,
            data: {
              module: 'date-picker',
              content: 'kit/date-picker.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'divider',
            component: ModuleComponent,
            data: {
              module: 'divider',
              content: 'kit/divider.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'dropdown-menu',
            component: ModuleComponent,
            data: {
              module: 'dropdown-menu',
              content: 'kit/dropdown-menu.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'form',
            component: ModuleComponent,
            data: {
              module: 'form',
              content: 'kit/form.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'input',
            component: ModuleComponent,
            data: {
              module: 'input',
              content: 'kit/input.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'layout',
            component: ModuleComponent,
            data: {
              module: 'layout',
              content: 'kit/layout.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'loading-bar',
            component: ModuleComponent,
            data: {
              module: 'loading-bar',
              content: 'kit/loading-bar.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'math-input',
            component: ModuleComponent,
            data: {
              module: 'math-input',
              content: 'kit/math-input.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'menu',
            component: ModuleComponent,
            data: {
              module: 'menu',
              content: 'kit/menu.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'modal',
            component: ModuleComponent,
            data: {
              module: 'modal',
              content: 'kit/modal.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'notification',
            component: ModuleComponent,
            data: {
              module: 'notification',
              content: 'kit/notification.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'pagination',
            component: ModuleComponent,
            data: {
              module: 'pagination',
              content: 'kit/pagination.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'popover',
            component: ModuleComponent,
            data: {
              module: 'popover',
              content: 'kit/popover.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'radio',
            component: ModuleComponent,
            data: {
              module: 'radio',
              content: 'kit/radio.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'select',
            component: ModuleComponent,
            data: {
              module: 'select',
              content: 'kit/select.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'spinner',
            component: ModuleComponent,
            data: {
              module: 'spinner',
              content: 'kit/spinner.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'tabs',
            component: ModuleComponent,
            data: {
              module: 'tabs',
              content: 'kit/tabs.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'tag',
            component: ModuleComponent,
            data: {
              module: 'tag',
              content: 'kit/tag.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'textarea',
            component: ModuleComponent,
            data: {
              module: 'textarea',
              content: 'kit/textarea.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'toggle',
            component: ModuleComponent,
            data: {
              module: 'toggle',
              content: 'kit/toggle.json',
            },
            resolve: {
              content: ContentResolverService,
            },
          },
          {
            path: 'tooltip',
            component: ModuleComponent,
            data: {
              module: 'tooltip',
              content: 'kit/tooltip.json',
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
