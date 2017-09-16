import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiDefaultFullForRootModule } from '@ngx-kit/ui-default';
import { MdRenderModule } from '@nvxme/ngx-md-render';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RootComponent } from './root/root.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: '_website'}),
    BrowserAnimationsModule,
    HttpClientModule,
    MdRenderModule,
    UiDefaultFullForRootModule,
    CoreModule,
    AppRoutingModule,
  ],
  declarations: [
    RootComponent,
    HomePageComponent,
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {
}
