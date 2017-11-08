import { ApplicationRef, NgModuleRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';
import { AppModule } from './app/app.module';
import { store } from './store';

export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<AppModule>>) => {
  let ngModule: NgModuleRef<AppModule>;
  module.hot.accept();
  bootstrap().then(mod => {
    store.counter++;
    ngModule = mod;
    ngModule.instance.hmrOnInit(store);
  });
  module.hot.dispose(() => {
    ngModule.instance.hmrOnDestroy(store);
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};
