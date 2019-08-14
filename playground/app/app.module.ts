import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonDemoModule } from '../../packages/evo/ui-evo/src/button/demo/button-demo.module';
import { CheckboxDemoModule } from '../../packages/evo/ui-evo/src/checkbox/demo/checkbox-demo.module';
import { DialogDemoModule } from '../../packages/evo/ui-evo/src/dialog/demo/dialog-demo.module';
import { DropdownDemoModule } from '../../packages/evo/ui-evo/src/dropdown/demo/dropdown-demo.module';
import { FileDemoModule } from '../../packages/evo/ui-evo/src/file/demo/file-demo.module';
import { FormDemoModule } from '../../packages/evo/ui-evo/src/form/demo/form-demo.module';
import { LoadingBarDemoModule } from '../../packages/evo/ui-evo/src/loading-bar/demo/loading-bar-demo.module';
import { LoadingBarModule } from '../../packages/evo/ui-evo/src/loading-bar/loading-bar.module';
import { NotificationDemoModule } from '../../packages/evo/ui-evo/src/notification/demo/notification-demo.module';
import { NotificationModule } from '../../packages/evo/ui-evo/src/notification/notification.module';
import { RadioDemoModule } from '../../packages/evo/ui-evo/src/radio/demo/radio-demo.module';
import { SelectDemoModule } from '../../packages/evo/ui-evo/src/select/demo/select-demo.module';
import { TextDemoModule } from '../../packages/evo/ui-evo/src/text/demo/text-demo.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LoadingBarModule,
    NotificationModule,
    // Demos
    ButtonDemoModule,
    CheckboxDemoModule,
    DialogDemoModule,
    DropdownDemoModule,
    FileDemoModule,
    FormDemoModule,
    LoadingBarDemoModule,
    NotificationDemoModule,
    RadioDemoModule,
    SelectDemoModule,
    TextDemoModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
