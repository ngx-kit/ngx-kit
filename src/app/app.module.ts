import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitFullForRootModule } from '@ngx-kit/ngx-kit';
import { AppComponent } from './app.component';
import { demo } from './package/demo/demo';
import { KitAccordionModule } from './package/lib/accordion/kit-accordion.module';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    ...demo,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KitFullForRootModule,
    KitAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
