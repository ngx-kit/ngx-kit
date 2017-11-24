import { NgModule } from '@angular/core';
import { KitEventManagerService } from '../kit-event-manager/kit-event-manager.service';
import { KitBrowserEventManagerService } from './event-manager/kit-browser-event-manager.service';

@NgModule({
  providers: [
    {
      provide: KitEventManagerService,
      useClass: KitBrowserEventManagerService,
    },
  ],
})
export class KitPlatformBrowserModule {
}
