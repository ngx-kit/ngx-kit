import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/Rx';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
