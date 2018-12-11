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
    loadChildren: './packages/core/core-package.module#CorePackageModule',
  },
  {
    path: 'collection',
    loadChildren: './packages/collection/collection-package.module#CollectionPackageModule',
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
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
