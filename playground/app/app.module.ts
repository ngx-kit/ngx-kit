import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { KitFullForRootModule } from '@ngx-kit/ngx-kit';
import { demo } from '../../src/demo/demo';
import { lib } from '../../src/lib/lib';
import { AppComponent } from './app.component';
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
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    KitFullForRootModule,
    ...lib,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
