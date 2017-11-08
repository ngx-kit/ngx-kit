import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { VcComponent } from './vc/vc.component';
import { KitFullForRootModule } from '../../../packages/core/src/kit-full.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
