import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentResolverService } from '../core/content-resolver.service';
import { DocsPageComponent } from '../shared/docs-page/docs-page.component';
import { UiBaseComponent } from './ui-base/ui-base.component';
import { UiModulePageComponent } from './ui-module-page/ui-module-page.component';

const pkgName = 'ui-base';
const routes: Routes = [
  {
    path: '',
    component: UiBaseComponent,
    data: {
      pkg: pkgName,
      file: '/assets/docs/packages/collection.json',
    },
    resolve: {
      content: ContentResolverService,
    },
    children: [
      {
        path: '',
        redirectTo: 'docs/OVERVIEW',
      },
      {
        path: 'docs/:name',
        component: DocsPageComponent,
        data: {
          pkg: pkgName,
        },
      },
      {
        path: 'module/:name',
        component: UiModulePageComponent,
        data: {
          pkg: pkgName,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiBaseRoutingModule {
}
