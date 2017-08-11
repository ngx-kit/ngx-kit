import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitFullForRootModule } from '../../../package/src/importer/kit-full.module';
import { AppComponent } from './app.component';
import { VcComponent } from './vc/vc.component';
import { Vc2Component } from './vc2/vc2.component';
import { Vc2deepComponent } from './vc2deep/vc2deep.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    KitFullForRootModule,
  ],
  declarations: [
    AppComponent,
    VcComponent,
    Vc2Component,
    Vc2deepComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
