import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeEditorComponent } from './theme-editor/theme-editor.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeEditorComponent,
    children: [
      {
        path: '',
        loadChildren: './overview/overview.module#OverviewModule',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeEditorRoutingModule {
}
