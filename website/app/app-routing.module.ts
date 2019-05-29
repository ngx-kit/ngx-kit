import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {
    path: 'e404',
    component: Error404Component,
  },
  {
    path: 'core',
    loadChildren: () => import('./packages/core/core-package.module').then(m => m.CorePackageModule),
  },
  {
    path: 'collection',
    loadChildren: () => import('./packages/collection/collection-package.module').then(m => m.CollectionPackageModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: 'e404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
