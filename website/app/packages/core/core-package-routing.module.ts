import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentResolverService } from '../../core/content-resolver.service';
import { DocsPageComponent } from '../../shared/docs-page/docs-page.component';
import { ModulePageComponent } from '../../shared/module-page/module-page.component';
import { MainComponent } from './main/main.component';

const pkgName = 'ngx-kit';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      pkg: pkgName,
      file: '/assets/docs/packages/core.json',
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
        component: ModulePageComponent,
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
export class CorePackageRoutingModule {
}
