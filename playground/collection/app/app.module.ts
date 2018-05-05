import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { KitModule } from '@ngx-kit/core';
import { CollectionDemoModule } from '../../../packages/collection/demo/collection-demo.module';
import { UiNotificationModule } from '../../../packages/collection/lib/ui-notification/ui-notification.module';
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
    KitModule,
    CollectionDemoModule,
    UiNotificationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
