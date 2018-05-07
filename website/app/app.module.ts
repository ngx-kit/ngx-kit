import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdRenderModule } from '@nvxme/ngx-md-render';
import { CollectionDemoModule } from '../../packages/collection/demo/collection-demo.module';
import { UiNotificationModule } from '../../packages/collection/lib/ui-notification/ui-notification.module';
import { AppRoutingModule } from './app-routing.module';
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
    CollectionDemoModule,
    UiNotificationModule.forRoot(),
    UiLoadingBarModule.forRoot(),
  ],
  declarations: [
    RootComponent,
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {
}
