import { NgModule } from '@angular/core';
import { KitEventManager } from '../kit-event-manager/kit-event-manager';
import { KitBrowserEventManager } from './event-manager/kit-browser-event-manager';

@NgModule({
  providers: [
    {
      provide: KitEventManager,
      useClass: KitBrowserEventManager,
    },
  ],
})
export class KitPlatformBrowserModule {
}
