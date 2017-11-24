import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitFullForRootModule, KitPlatformBrowserModule } from '@ngx-kit/core';
import { AppComponent } from './app.component';
import { VcComponent } from './vc/vc.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    KitFullForRootModule,
    KitPlatformBrowserModule,
  ],
  declarations: [
    AppComponent,
    VcComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
