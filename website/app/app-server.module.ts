import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppModule } from './app.module';
import { RootComponent } from './root/root.component';
import { ServerHttp } from './server/server-http';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  bootstrap: [
    RootComponent,
  ],
  providers: [
    {
      provide: HttpClient,
      useClass: ServerHttp,
    },
  ],
})
export class AppServerModule {
}
