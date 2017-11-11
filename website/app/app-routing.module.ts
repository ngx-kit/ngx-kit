import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
