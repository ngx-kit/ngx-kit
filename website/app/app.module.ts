import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { kitMomentInstance } from '@ngx-kit/core';
import { MonitErrorHandler } from '@nvxme/monit-ng-client';
import { MdRenderModule } from '@nvxme/ngx-md-render';
import * as moment from 'moment';
import { DemoModule } from '../../packages/collection/lib/demo.module';
import { UiNotificationModule } from '../../packages/collection/lib/ui-notification/ui-notification.module';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error404/error404.component';
import { RootComponent } from './root/root.component';
import { SharedModule } from './shared/shared.module';
import { UiLoadingBarModule } from './shared/ws-kit/ui-loading-bar';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: '_website'}),
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdRenderModule,
    SharedModule,
    AppRoutingModule,
    DemoModule,
    UiNotificationModule.forRoot(),
    UiLoadingBarModule.forRoot(),
  ],
  declarations: [
    RootComponent,
    Error404Component,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: MonitErrorHandler,
    },
    {
      provide: kitMomentInstance,
      useValue: moment,
    },
  ],
  bootstrap: [RootComponent],
})
export class AppModule {
}
