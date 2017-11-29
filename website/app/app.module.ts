import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitModule, KitPlatformBrowserModule, KitRootModule } from '@ngx-kit/core';
import { MdRenderModule } from '@nvxme/ngx-md-render';
import { CollectionDemoModule } from '../../packages/collection/demo/collection-demo.module';
import { AppRoutingModule } from './app-routing.module';
import { ContentService } from './core/content.service';
import { CoreModule } from './core/core.module';
import { RootComponent } from './root/root.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: '_website'}),
    BrowserAnimationsModule,
    HttpClientModule,
    MdRenderModule,
    CoreModule,
    SharedModule,
    KitRootModule,
    KitModule,
    KitPlatformBrowserModule,
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
  constructor(public srv: ContentService) {
  }

  hmrOnDestroy(store: any) {
    // store.state = this.srv.piu;
  }

  hmrOnInit(store: any) {
//    this.srv.piu = store.state;
  }
}
