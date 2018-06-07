import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoModule } from '../../../packages/collection/lib/demo.module';
import { UiLoadingBarModule } from '../../../packages/collection/lib/ui-loading-bar/ui-loading-bar.module';
import { UiNotificationModule } from '../../../packages/collection/lib/ui-notification/ui-notification.module';
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
    DemoModule,
    UiNotificationModule.forRoot(),
    UiLoadingBarModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
