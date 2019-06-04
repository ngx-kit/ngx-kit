import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EvoLoadingBarModule } from '../../packages/evo/loading/index';
import { EvoNotificationModule } from '../../packages/evo/notification/index';
import { EvoButtonDemoModule } from '../../packages/evo/button/src/demo/evo-button-demo.module';
import { EvoDialogDemoModule } from '../../packages/evo/dialog/src/demo/evo-dialog-demo.module';
import { EvoDropdownDemoModule } from '../../packages/evo/dropdown/src/demo/evo-dropdown-demo.module';
import { EvoFileDemoModule } from '../../packages/evo/file/src/demo/evo-file-demo.module';
import { EvoFormDemoModule } from '../../packages/evo/form/src/demo/evo-form-demo.module';
import { EvoLoadingDemoModule } from '../../packages/evo/loading/src/demo/evo-loading-demo.module';
import { EvoNotificationDemoModule } from '../../packages/evo/notification/src/demo/evo-notification-demo.module';
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
    // Demos
    EvoButtonDemoModule,
    EvoDialogDemoModule,
    EvoDropdownDemoModule,
    EvoFileDemoModule,
    EvoFormDemoModule,
    EvoLoadingBarModule.forRoot(),
    EvoLoadingDemoModule,
    EvoNotificationModule.forRoot(),
    EvoNotificationDemoModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
