import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { KitFullForRootModule } from '@ngx-kit/ngx-kit';
import { AppComponent } from './app.component';
import { demo } from '../../package/demo/demo';
import { lib } from '../../package/lib/lib';
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
    FormsModule,
    RouterModule.forRoot([]),
    KitFullForRootModule,
    ...lib,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
