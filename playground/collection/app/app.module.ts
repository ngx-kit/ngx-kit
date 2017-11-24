import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { KitFullForRootModule, KitPlatformBrowserModule } from '@ngx-kit/core';
import { CollectionDemoModule } from '../../../packages/collection/demo/collection-demo.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    KitFullForRootModule,
    KitPlatformBrowserModule,
    CollectionDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
