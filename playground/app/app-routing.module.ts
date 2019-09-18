import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonDemoComponent } from '../../packages/evo/ui-lite/src/button/demo/button-demo.component';
import { CheckboxDemoComponent } from '../../packages/evo/ui-lite/src/checkbox/demo/checkbox-demo.component';
import { DialogDemoComponent } from '../../packages/evo/ui-lite/src/dialog/demo/dialog-demo.component';
import { DropdownDemoComponent } from '../../packages/evo/ui-lite/src/dropdown/demo/dropdown-demo.component';
import { FileDemoComponent } from '../../packages/evo/ui-lite/src/file/demo/file-demo.component';
import { FormDemoComponent } from '../../packages/evo/ui-lite/src/form/demo/form-demo.component';
import { LoadingBarDemoComponent } from '../../packages/evo/ui-lite/src/loading-bar/demo/loading-bar-demo.component';
import { NotificationDemoComponent } from '../../packages/evo/ui-lite/src/notification/demo/notification-demo.component';
import { PopupDemoComponent } from '../../packages/evo/ui-lite/src/popup/demo/popup-demo.component';
import { RadioDemoComponent } from '../../packages/evo/ui-lite/src/radio/demo/radio-demo.component';
import { SelectDemoComponent } from '../../packages/evo/ui-lite/src/select/demo/select-demo.component';
import { TextDemoComponent } from '../../packages/evo/ui-lite/src/text/demo/text-demo.component';

const routes: Routes = [
  {
    path: 'button',
    component: ButtonDemoComponent,
  },
  {
    path: 'checkbox',
    component: CheckboxDemoComponent,
  },
  {
    path: 'dialog',
    component: DialogDemoComponent,
  },
  {
    path: 'dropdown',
    component: DropdownDemoComponent,
  },
  {
    path: 'file',
    component: FileDemoComponent,
  },
  {
    path: 'form',
    component: FormDemoComponent,
  },
  {
    path: 'loading-bar',
    component: LoadingBarDemoComponent,
  },
  {
    path: 'notification',
    component: NotificationDemoComponent,
  },
  {
    path: 'popup',
    component: PopupDemoComponent,
  },
  {
    path: 'radio',
    component: RadioDemoComponent,
  },
  {
    path: 'select',
    component: SelectDemoComponent,
  },
  {
    path: 'text',
    component: TextDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
