import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '@ngx-kit/core';
import { KitDefaultThemeModule } from '@ngx-kit/default-theme';
import { KitLayoutModule } from '@ngx-kit/layout';
import { KitNavigationModule } from '@ngx-kit/navigation';
import { MdRenderModule } from '@nvxme/ngx-md-render';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    // angular
    BrowserModule,
    HttpModule,
    // kit
    StylerModule.forRoot(),
    KitCoreModule.forRoot(),
    KitDefaultThemeModule.forRoot(),
    KitLayoutModule,
    KitNavigationModule,
    // vendors
    MdRenderModule,
    // app
    CoreModule,
    AppRoutingModule,
  ],
  declarations: [
    RootComponent,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}
