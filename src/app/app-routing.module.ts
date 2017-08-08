import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'kit',
    pathMatch: 'full',
  },
  {
    path: 'kit',
    loadChildren: './kit/kit.module#KitModule',
  },
  {
    path: 'theme-editor',
    loadChildren: './theme-editor/theme-editor.module#ThemeEditorModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
