import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsPageComponent } from '../../shared/docs-page/docs-page.component';
import { MainComponent } from './main/main.component';
import { UiModulePageComponent } from './ui-module-page/ui-module-page.component';

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
      },
      {
        path: 'module/:name',
        component: UiModulePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionPackageRoutingModule {
}
