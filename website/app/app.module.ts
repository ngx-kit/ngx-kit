import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { KitModule } from '@ngx-kit/core';
import { MdRenderModule } from '@nvxme/ngx-md-render';
import { CollectionDemoModule } from '../../packages/collection/demo/collection-demo.module';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: '_website'}),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdRenderModule,
    KitModule,
    SharedModule,
    AppRoutingModule,
    CollectionDemoModule,
  ],
  declarations: [
    RootComponent,
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {
}
