import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KitFullForRootModule } from '../../../package/src/importer/kit-full.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    KitFullForRootModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
