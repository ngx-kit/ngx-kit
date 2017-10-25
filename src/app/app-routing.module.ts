import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ngx-kit',
    loadChildren: './kit/kit.module#KitModule',
  },
  {
    path: 'ui-base',
    loadChildren: './ui-base/ui-base.module#UiBaseModule',
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
