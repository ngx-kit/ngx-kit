import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitFullForRootModule } from '@ngx-kit/core';
import { StylerModule } from '@ngx-kit/styler';
import { MdRenderModule } from '@nvxme/ngx-md-render';
import { AppRoutingModule } from './app-routing.module';
import { ContentService } from './core/content.service';
import { CoreModule } from './core/core.module';
import { RootComponent } from './root/root.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: '_website'}),
    BrowserAnimationsModule,
    HttpClientModule,
    MdRenderModule,
    CoreModule,
    KitFullForRootModule,
    StylerModule.forRoot(),
    AppRoutingModule,
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
