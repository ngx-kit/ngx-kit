import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitFullForRootModule } from '@ngx-kit/ngx-kit';
import { MdRenderModule } from '@nvxme/ngx-md-render';
import { lib } from '../packages/ui-base/src/lib/lib';
import { AppRoutingModule } from './app-routing.module';
import { ContentService } from './core/content.service';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RootComponent } from './root/root.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: '_website'}),
    BrowserAnimationsModule,
    HttpClientModule,
    MdRenderModule,
    CoreModule,
    KitFullForRootModule,
    AppRoutingModule,
    ...lib,
  ],
  declarations: [
    RootComponent,
    HomePageComponent,
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {
  constructor(public srv: ContentService) {
  }

  hmrOnDestroy(store) {
    // store.state = this.srv.piu;
  }

  hmrOnInit(store) {
//    this.srv.piu = store.state;
  }
}
