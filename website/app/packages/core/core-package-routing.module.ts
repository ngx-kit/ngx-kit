import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsPageComponent } from '../../shared/docs-page/docs-page.component';
import { ModulePage3Component } from '../../shared/module-page3/module-page3.component';
import { MainComponent } from './main/main.component';
import { pkgName } from './meta';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'docs/introduction',
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
        component: ModulePage3Component,
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
