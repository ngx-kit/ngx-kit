import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvoButtonDemoComponent } from '../../packages/evo/button/src/demo/evo-button-demo.component';
import { EvoDialogDemoComponent } from '../../packages/evo/dialog/src/demo/evo-dialog-demo.component';
import { EvoDropdownDemoComponent } from '../../packages/evo/dropdown/src/demo/evo-dropdown-demo.component';
import { EvoFileDemoComponent } from '../../packages/evo/file/src/demo/evo-file-demo.component';
import { EvoFormDemoComponent } from '../../packages/evo/form/src/demo/evo-form-demo.component';
import { EvoLoadingDemoComponent } from '../../packages/evo/loading/src/demo/evo-loading-demo.component';
import { EvoNotificationDemoComponent } from '../../packages/evo/notification/src/demo/evo-notification-demo.component';
import { EvoSelectDemoComponent } from '../../packages/evo/select/src/demo/evo-select-demo.component';

const routes: Routes = [
  {
    path: 'button',
    component: EvoButtonDemoComponent,
  },
  {
    path: 'dialog',
    component: EvoDialogDemoComponent,
  },
  {
    path: 'dropdown',
    component: EvoDropdownDemoComponent,
  },
  {
    path: 'file',
    component: EvoFileDemoComponent,
  },
  {
    path: 'form',
    component: EvoFormDemoComponent,
  },
  {
    path: 'loading',
    component: EvoLoadingDemoComponent,
  },
  {
    path: 'notification',
    component: EvoNotificationDemoComponent,
  },
  {
    path: 'select',
    component: EvoSelectDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
