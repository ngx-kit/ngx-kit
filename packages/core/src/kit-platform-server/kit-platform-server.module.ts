import { NgModule } from '@angular/core';
import { KitEventManager } from '../kit-event-manager/kit-event-manager';
import { KitServerEventManager } from './event-manager/kit-server-event-manager';

@NgModule({
  providers: [
    {
      provide: KitEventManager,
      useClass: KitServerEventManager,
    },
  ],
})
export class KitPlatformServerModule {
}
