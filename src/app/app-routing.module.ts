import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'ngx-kit',
    loadChildren: './kit/kit.module#KitModule',
  },
  {
    path: 'ui-default',
    loadChildren: './ui-default/ui-default.module#UiDefaultModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
