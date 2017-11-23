import { NgModule } from '@angular/core';
import { KitEventManagerService } from '../kit-event-manager/kit-event-manager.service';
import { KitServerEventManagerService } from './event-manager/kit-server-event-manager.service';

@NgModule({
  providers: [
    {
      provide: KitEventManagerService,
      useClass: KitServerEventManagerService,
    },
  ],
})
export class KitPlatformServerModule {
}
